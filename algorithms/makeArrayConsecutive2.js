function makeArrayConsecutive2(statues) {
  statues = statues.sort((x, y) => {
    return x - y;
  });
  console.log(statues);
  return statues[statues.length - 1] - statues[0] - (statues.length - 1);
}
