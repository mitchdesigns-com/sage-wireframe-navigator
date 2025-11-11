'use client'
import React, { useEffect, useRef } from 'react'
import SageIcon from '@/components/icons/SageIcon'
import { Words } from '../../types/homePage'
/**
 * DirectionScrollSection
 * A scroll-based marquee component matching the Figma design
 * - Two slightly rotated horizontal strips
 * - Scroll-based animation for dynamic movement
 * - Matching colors and styling from design
 */
const WORDS = [
  'Care',
  'Hospitality',
  'World-Class',
  'Comprehensive',
  'Trusted',
  'Seamless',
]

export default function DirectionScrollSection({
  Words,
  locale,
}: {
  Words: Words[]
  locale: 'en' | 'ar'
}) {
  console.log(Words)
  // Add proper typing for refs to avoid TS errors
  const innerA = useRef<HTMLDivElement>(null)
  const innerB = useRef<HTMLDivElement>(null)
  const offsets = useRef([0, 0]) // current translateX for each row
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)
  const ticking = useRef(false)
  const widths = useRef([0, 0]) // measured scrollWidth of each inner row
  const rafId = useRef<number | null>(null)

  // tune these: negative = row moves left when you scroll down; positive = moves right
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const speeds = [-0.6, 0.6]

  // how many times to repeat the WORDS block (make sure row is long enough to avoid gaps)
  const REPEAT = 20

  useEffect(() => {
    const measure = () => {
      widths.current[0] = innerA.current ? innerA.current.scrollWidth : 0
      widths.current[1] = innerB.current ? innerB.current.scrollWidth : 0
    }

    // initial measure
    measure()

    // re-measure on resize (passive for perf)
    const onResize = () => measure()
    window.addEventListener('resize', onResize, { passive: true })

    // scroll handler: schedule update on rAF
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        rafId.current = window.requestAnimationFrame(updatePositions)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // update function run inside rAF
    function updatePositions() {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current
      lastScrollY.current = currentY

      // for each row, update offset by delta * speed and wrap inside [-width, 0)
      ;[0, 1].forEach((i) => {
        const w = widths.current[i] || 1
        let off = offsets.current[i] + delta * speeds[i] * 1.2 // extra multiplier for visible effect
        // wrap into [-w, 0)
        if (w) {
          off = off % w
          if (off > 0) off -= w / 6
        }
        offsets.current[i] = off
        const el = i === 0 ? innerA.current : innerB.current
        if (el) {
          ;(el as HTMLDivElement).style.transform =
            `translate3d(${off}px, 0, 0)`
        }
      })

      ticking.current = false
    }

    // cleanup
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [speeds])

  // render repeated items
  const renderRepeat = (keyPrefix: string) =>
    Array.from({ length: REPEAT }).map(
      (_, idx) =>
        Words &&
        Words.map((w, j) => (
          <div className="ds-item" key={`${keyPrefix}-${idx}-${j}`}>
            <span className="ds-word">{w.word}</span>
            <div className="ds-separator text-Primary-Scrub">
              <SageIcon />
            </div>
          </div>
        ))
    )

  return (
    <>
      {/* Inline CSS matching Figma design */}
      <style>{`
        /* section wrapper */
        .ds-section {
            position: relative;
            max-width: 100vw;
            padding: 0 0;
            overflow: visible;
            z-index: 2;   
        }

        /* outer container for centering and positioning */
        .ds-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* individual strip */
        .ds-strip {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #025850;
          padding: 12px 40px;
          gap: 46px;
          width: 200vw; /* Make it extra wide for seamless scrolling */
          height: 70px;
          white-space: nowrap;
          box-sizing: border-box;
        }

        /* first strip rotation */
        .ds-strip:first-child {
          transform-origin: 10px;
            left: 50%;
            transform: translateX(-50%) rotate(-1.4deg);
            top: -10px;
        }

        /* second strip rotation (opposite direction) */
        .ds-strip:nth-child(2) {
            transform: rotate(1.8deg);
            top: -20px;
            transform-origin: 80%;
        }

        /* the moving inner container */
        .ds-inner {
          display: inline-flex;
          align-items: center;
          gap: 46px;
          will-change: transform;
        }

        /* single item (word + icon) */
        .ds-item {
          display: inline-flex;
          align-items: center;
          gap: 46px;
          font-family: 'Aeonik', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          font-weight: 700;
          font-size: 32px;
          color: #caf48e;
          line-height: 1.5;
          white-space: nowrap;
          flex-shrink: 0;
        }

        /* separator with icon */
        .ds-separator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 18px;
          flex-shrink: 0;
        }

        /* icon styling */
        .ds-icon {
          display: block;
          color: #caf48e;
        }

        /* word span */
        .ds-word {
          display: inline-block;
          flex-shrink: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ds-item {
            font-size: 24px;
            gap: 32px;
          }
          .ds-inner {
            gap: 32px;
          }
          .ds-strip {
            gap: 32px;
            padding: 12px 24px;
          }
        }

        @media (max-width: 480px) {
          .ds-item {
            font-size: 18px;
            gap: 24px;
          }
          .ds-inner {
            gap: 24px;
          }
          .ds-strip {
            gap: 24px;
            padding: 12px 16px;
          }
        }
      `}</style>
      <div className="select-none">
        <section className="ds-section">
          <div className="ds-container">
            <div className="ds-strip">
              <div className="ds-inner" ref={innerA}>
                {renderRepeat('a')}
              </div>
            </div>

            <div className="ds-strip">
              <div className="ds-inner" ref={innerB}>
                {renderRepeat('b')}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
