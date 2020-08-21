let ages = [10, 20, 40, 45, 48, 50, 52, 57, 60, 70, 80, 90, 95, 100];
ages = ages.sort((a, b) => a - b);
let currentGroup = 10,
  ptr = 0;
let groups = [],
  currentGroupList = [];
while (currentGroup <= 100) {
  if (ages[ptr] <= currentGroup) {
    currentGroupList.push(ages[ptr]);
    ptr++;
  } else {
    groups.push(currentGroupList);
    currentGroupList = [];
    currentGroup += 10;
  }
}

groups.map((group, i) => console.log(`${i * 10 - 9 + 10}-${i * 10 + 10}: ${group.length}`));
