import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { gsap } from "gsap";

const BackgroundCards = forwardRef((props, ref) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [shouldBlur, setShouldBlur] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const blurTimeoutRef = useRef(null);

  useImperativeHandle(ref, () => ({
    getContainer: () => containerRef.current,
    getCards: () => cardsRef.current,
  }));

  // Customizable GIF configuration
  // Edit these settings to customize positions, sizes, and other properties
  const gifConfig = [
    {
      id: 0,
      gifPath:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnI1bnR6bmZ5eW1mcG1vanh2cngyYjIyZTJseDA3M2hjaHg3bXRjeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/elzCnIQAjQMWA/giphy.gif",
      position: {
        col: 1, // Grid column (1-3)
        row: 1, // Grid row (1-3)
        colSpan: 1, // Column span
        rowSpan: 1, // Row span
        justify: "start", // 'start' | 'center' | 'end'
        align: "start", // 'start' | 'center' | 'end'
        offsetX: 200, // Horizontal offset in pixels (for overlapping)
        offsetY: 50, // Vertical offset in pixels (for overlapping)
      },
      style: {
        aspectRatio: "16/10", // '16/10' for landscape, '3/4' for portrait
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 3, // Animation depth (lower = front, higher = back)
      maxSize: "50%", // Maximum size (percentage of grid cell)
    },
    {
      id: 2,
      gifPath:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFoN2hyOXhnM3ZsMXE3Y2Fud2c4bHE0YnZvbWJmOHc0dnVxNGE1eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eNYYJRf13HI6zAylIs/giphy.gif",
      position: {
        col: 3,
        row: 1,
        colSpan: 1,
        rowSpan: 1,
        justify: "end",
        align: "start",
        offsetX: 100,
        offsetY: 0,
      },
      style: {
        aspectRatio: "16/10",
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 4,
      maxSize: "50%",
    },
    {
      id: 3,
      gifPath:
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnc5NXZ4dGV2czExa2d1YmhxeHJsb2RwazZoN3Q5czU1MG1qdDE1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rCLfSkYzsCV8tpkFww/giphy.gif",
      position: {
        col: 1,
        row: 3,
        colSpan: 1,
        rowSpan: 1,
        justify: "start",
        align: "end",
        offsetX: -150,
        offsetY: -200,
      },
      style: {
        aspectRatio: "3/4",
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 1,
      maxSize: "50%",
    },
    {
      id: 4,
      gifPath:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExem5kcTY5MmdiNWN1ZXMxYWc2am80dTBlc3ZuM3B0NGZmaGRpeDBvcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wPV4ypjSChqy9kEge9/giphy.gif",
      position: {
        col: 2,
        row: 3,
        colSpan: 1,
        rowSpan: 1,
        justify: "start",
        align: "end",
        offsetX: 100,
        offsetY: 100,
      },
      style: {
        aspectRatio: "16/10",
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 2,
      maxSize: "50%",
    },
    {
      id: 5,
      gifPath:
        "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWdhemJkcjlja3l1dHpnMjdoNWxjdnJuNDQ0Ymd6dHJnbmlxd3dudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0K4m9PR9DvVC6zWo/giphy.gif",
      position: {
        col: 2,
        row: 3,
        colSpan: 1,
        rowSpan: 1,
        justify: "center",
        align: "end",
        offsetX: -300, // Negative value for left overlap, positive for right overlap
        offsetY: 150,
      },
      style: {
        aspectRatio: "3/4",
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 2,
      maxSize: "50%",
    },
    {
      id: 6,
      gifPath:
        "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d2ZuM2psZG03YncxdXpnMjl3MmNzejdoaXFkYndtMGV3ems0YWMxdCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/mFMba86IdG2Hc9GIQw/giphy.gif",
      position: {
        col: 3,
        row: 3,
        colSpan: 1,
        rowSpan: 1,
        justify: "end",
        align: "end",
        offsetX: 100,
        offsetY: 0,
      },
      style: {
        aspectRatio: "16/10",
        objectFit: "cover",
        objectPosition: "center",
      },
      depth: 3,
      maxSize: "50%",
    },
  ];

  // Extract arrays for backward compatibility
  const cardDepths = gifConfig.map((config) => config.depth);

  // Parallax effect on mouse move - smoothed and more intense
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          // Base speed based on depth - front cards (lower depth) move more, back cards (higher depth) move less
          const depth = cardDepths[index] || 3;
          // Inverted depth logic: lower depth = higher speed for more dramatic effect
          // Front cards move ~3x more than back cards
          const baseSpeed = (5 - depth) * 0.025; // Front (depth 1) = 0.1, Back (depth 4) = 0.025
          const speed = baseSpeed * 1.5; // Reduced intensity multiplier (1.5x)

          const x = mouseX * speed;
          const y = mouseY * speed;

          // If card is hovered, reduce movement
          const targetX = index === hoveredCard ? x * 0.5 : x;
          const targetY = index === hoveredCard ? y * 0.5 : y;

          // Use gsap.to() with smooth easing instead of gsap.set() for smoother animation
          gsap.to(card, {
            x: targetX,
            y: targetY,
            duration: 0.9,
            ease: "power1.out",
            overwrite: true,
          });
        }
      });
    };

    // Use requestAnimationFrame for smoother performance and throttling
    let rafId;
    const optimizedMouseMove = (e) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener("mousemove", optimizedMouseMove);
    return () => {
      window.removeEventListener("mousemove", optimizedMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [hoveredCard]);

  // Build cards from configuration
  const cards = gifConfig.map((config) => ({
    id: config.id,
    position: config.position,
    depth: config.depth,
    style: config.style,
    maxSize: config.maxSize,
    content: (
      <div
        className="w-full h-full rounded-lg overflow-hidden relative bg-black"
        style={{ aspectRatio: config.style.aspectRatio }}
      >
        {imageErrors.has(config.id) ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
            <div className="text-white/50 text-xs text-center p-4">
              <p>GIF {config.id + 1}</p>
              <p className="text-xs mt-2 opacity-50">
                Add: public/gifs/{config.gifPath.split("/").pop()}
              </p>
            </div>
          </div>
        ) : (
          <img
            src={config.gifPath}
            alt={`Technical gif ${config.id}`}
            className="w-full h-full"
            style={{
              objectFit: config.style.objectFit,
              objectPosition: config.style.objectPosition,
            }}
            loading="lazy"
            onError={() => {
              setImageErrors((prev) => new Set([...prev, config.id]));
            }}
          />
        )}
      </div>
    ),
  }));

  // Front-to-back animation on mount - runs after cards are rendered
  useEffect(() => {
    // Wait for next frame to ensure all refs are populated
    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(() => {
        if (!containerRef.current) return;

        // Sort cards by depth (front to back: lower depth = front, higher depth = back)
        const sortedCards = cardsRef.current
          .map((card, index) => ({
            card,
            index,
            depth: cardDepths[index] || 5,
          }))
          .filter((item) => item.card !== null && item.card !== undefined)
          .sort((a, b) => a.depth - b.depth); // Front (depth 1) animates first, back (depth 4) last

        // Animate cards from front to back with stagger
        sortedCards.forEach(({ card, depth }, sortedIndex) => {
          if (card) {
            gsap.set(card, {
              opacity: 0,
              scale: 0.8,
              z: -100 * depth, // 3D depth effect
            });

            gsap.to(card, {
              opacity: 1,
              scale: 1,
              z: 0,
              duration: 1.4,
              delay: sortedIndex * 0.15, // Stagger: front cards animate first
              ease: "power1.out",
            });
          }
        });
      });

      return () => cancelAnimationFrame(frame2);
    });

    return () => cancelAnimationFrame(frame1);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 grid grid-cols-3 grid-rows-3 gap-4 md:gap-6 p-4 md:p-6 lg:p-12 z-0"
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr",
      }}
    >
      {cards.map((card, index) => {
        const isHovered = hoveredCard === index;
        const isBlurred = shouldBlur && hoveredCard !== null && !isHovered;
        const pos = card.position;
        const config = gifConfig[index];
        const depth = config.depth || 3;

        // Adjust z-index based on depth and overlap
        const baseZIndex = depth * 5;
        const zIndex = isHovered ? 30 : baseZIndex;

        // Calculate positioning with custom offsets for overlapping
        const gridStyle = {
          gridColumn: `${pos.col} / span ${pos.colSpan}`,
          gridRow: `${pos.row} / span ${pos.rowSpan}`,
          zIndex: zIndex,
          willChange: "transform, opacity",
          justifySelf: pos.justify || "center",
          alignSelf: pos.align || "center",
          position: "relative",
        };

        // Add offsets for overlapping/positioning cards
        if (pos.offsetX !== 0) {
          gridStyle.left = `${pos.offsetX}px`;
        }
        if (pos.offsetY !== 0) {
          gridStyle.top = `${pos.offsetY}px`;
        }

        // Size constraints from configuration
        const cardSizeConstraints = {
          maxWidth: config.maxSize || "50%",
          maxHeight: config.maxSize || "50%",
          width: "auto",
          height: "auto",
        };

        const handleMouseEnter = () => {
          setHoveredCard(index);
          // Clear any existing timeout
          if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
          }
          // Apply blur to other cards with a delay
          blurTimeoutRef.current = setTimeout(() => {
            setShouldBlur(true);
          }, 200); // 200ms delay before blur appears
        };

        const handleMouseLeave = () => {
          setHoveredCard(null);
          setShouldBlur(false);
          if (blurTimeoutRef.current) {
            clearTimeout(blurTimeoutRef.current);
          }
        };

        return (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`pointer-events-auto card-animation ${
              isBlurred ? "blur-sm opacity-75" : "blur-0 opacity-100"
            } ${
              isHovered ? "scale-105" : "scale-100"
            } transition-[blur,opacity] duration-300`}
            style={gridStyle}
          >
            <div
              className="cursor-pointer flex items-center justify-center"
              style={cardSizeConstraints}
            >
              {card.content}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default BackgroundCards;
