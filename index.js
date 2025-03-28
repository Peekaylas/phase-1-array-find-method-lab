function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  
  const record = [
    { year: "2018", result: "L" },
    { year: "2019", result: "W" },
    { year: "2020", result: "L" }
  ];
  
  console.log(superbowlWin(record)); 
  console.log(superbowlWin([{ year: "2021", result: "L" }]));