export default function CartIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      className={className}
    >
      <g
        transform="translate(0,36) scale(0.1,-0.1)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M260 290 c0 -6 -40 -10 -100 -10 l-100 0 0 -37 c0 -21 3 -55 6 -75
          l7 -38 103 0 104 0 0 75 c0 43 4 75 10 75 6 0 10 5 10 10 0 6 -9 10 -20 10
          -11 0 -20 -4 -20 -10z m-5 -85 l0 -50 -81 -3 -81 -3 -7 38 c-12 77 -16 74 82
          71 l87 -3 0 -50z"
        />
        <path d="M72 93 c5 -26 38 -29 38 -4 0 15 -6 21 -21 21 -14 0 -19 -5 -17 -17z" />
        <path d="M235 100 c-4 -7 -3 -16 3 -22 14 -14 45 -2 40 15 -6 16 -34 21 -43 7z" />
      </g>
    </svg>
  );
}
