export const getMakeDistribution = (data) => {
  const makeCounts = data.reduce((acc, item) => {
    acc[item.Make] = (acc[item.Make] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(makeCounts).map(([make, count]) => ({
    name: make,
    value: count,
  }));
};

export const getCountyDistribution = (data) => {
  const countyCounts = data.reduce((acc, item) => {
    const county = item.County;
    const state = item.State;

    if (!county || !state) return acc;

    const key = `${county}, ${state}`;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(countyCounts).map(([key, count]) => {
    const [county, state] = key.split(", ");
    return { county, state, count };
  });
};

export const getRangeDistribution = (data) => {
  const rangeCounts = {
    "0-100": 0,
    "100-200": 0,
    "200-300": 0,
    "300+": 0,
  };

  data.forEach((item) => {
    const range = parseInt(item["Electric Range"], 10);
    if (range <= 100) rangeCounts["0-100"] += 1;
    else if (range <= 200) rangeCounts["100-200"] += 1;
    else if (range <= 300) rangeCounts["200-300"] += 1;
    else rangeCounts["300+"] += 1;
  });

  return Object.entries(rangeCounts).map(([range, count]) => ({
    range,
    count,
  }));
};
