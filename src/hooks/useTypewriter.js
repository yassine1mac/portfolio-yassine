import { useEffect, useRef, useState } from "react";

// Drives the hero terminal cycle: types the NL question char-by-char, then
// streams the SQL line-by-line, then reveals the result. Loops through
// `examples`. Respects prefers-reduced-motion (jumps straight to final state
// of the first example, no cycle). Paused when `paused` is true.
//
// examples: [{ nl: string, sql: string[], result: string }, ...]
export default function useTypewriter(examples, { paused = false } = {}) {
  const [state, setState] = useState(() => initialState(examples));
  const timerRef = useRef(null);
  const pausedRef = useRef(paused);

  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    if (!examples || examples.length === 0) return;

    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const first = examples[0];
      setState({
        index: 0,
        phase: "done",
        typedNl: first.nl,
        typedSqlLines: first.sql.slice(),
        typedSqlChars: 0,
        showResult: true
      });
      return;
    }

    let cancelled = false;

    // Timings (ms)
    const CHAR_MS = 32;
    const LINE_HOLD_MS = 55;
    const PAUSE_AFTER_NL_MS = 400;
    const PAUSE_BEFORE_RESULT_MS = 250;
    const HOLD_FULL_MS = 2600;
    const FADE_MS = 220;

    function schedule(fn, delay) {
      timerRef.current = setTimeout(() => {
        if (cancelled) return;
        if (pausedRef.current) {
          schedule(fn, 120);
          return;
        }
        fn();
      }, delay);
    }

    function runExample(idx) {
      const ex = examples[idx];
      let nlIdx = 0;
      let lineIdx = 0;
      let charIdx = 0;

      setState({
        index: idx,
        phase: "typing-nl",
        typedNl: "",
        typedSqlLines: [],
        typedSqlChars: 0,
        showResult: false
      });

      function typeNlChar() {
        nlIdx += 1;
        setState((s) => ({ ...s, typedNl: ex.nl.slice(0, nlIdx) }));
        if (nlIdx < ex.nl.length) {
          schedule(typeNlChar, CHAR_MS);
        } else {
          schedule(startSql, PAUSE_AFTER_NL_MS);
        }
      }

      function startSql() {
        setState((s) => ({ ...s, phase: "typing-sql" }));
        typeSqlLine();
      }

      function typeSqlLine() {
        const line = ex.sql[lineIdx];
        charIdx += 1;
        const partial = line.slice(0, charIdx);
        setState((s) => {
          const done = ex.sql.slice(0, lineIdx);
          return { ...s, typedSqlLines: [...done, partial], typedSqlChars: charIdx };
        });
        if (charIdx < line.length) {
          schedule(typeSqlLine, Math.max(6, Math.floor(CHAR_MS * 0.35)));
        } else {
          // line done, move to next
          lineIdx += 1;
          charIdx = 0;
          if (lineIdx < ex.sql.length) {
            schedule(typeSqlLine, LINE_HOLD_MS);
          } else {
            schedule(showResult, PAUSE_BEFORE_RESULT_MS);
          }
        }
      }

      function showResult() {
        setState((s) => ({ ...s, phase: "done", showResult: true }));
        schedule(fadeOut, HOLD_FULL_MS);
      }

      function fadeOut() {
        setState((s) => ({ ...s, phase: "fading" }));
        schedule(() => {
          const next = (idx + 1) % examples.length;
          runExample(next);
        }, FADE_MS);
      }

      schedule(typeNlChar, CHAR_MS);
    }

    runExample(0);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examples]);

  return state;
}

function initialState(examples) {
  const first = examples && examples[0];
  return {
    index: 0,
    phase: "idle",
    typedNl: first ? "" : "",
    typedSqlLines: [],
    typedSqlChars: 0,
    showResult: false
  };
}
