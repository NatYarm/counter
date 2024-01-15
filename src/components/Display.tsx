type PropsType = {
  displayNumber: number;
};

const Display = ({ displayNumber }: PropsType) => {
  return (
    <div className={displayNumber === 5 ? 'display limit' : 'display'}>
      {displayNumber}
    </div>
  );
};

export default Display;

// const Display = ({ displayNumber }: PropsType) => {
//   return (
//     <div className={displayNumber === 5 ? 'display limit' : 'display'}>
//       {displayNumber}
//     </div>
//   );
// };
