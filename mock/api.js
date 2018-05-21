export function fakeList(count) {
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push({
      id: i,
      name: `Tony ${i}`,
      age: 20,
      address: 'New York No. 1 Lake Park'
    })
  }
  return list;
}

export function getList(req, res, u) {
  let url = u;
  if (!url || Object.prototype.toString.call(url) !== '[object String]') {
    url = req.url;
  }
  const count = 20;
  const result = fakeList(count);
  if(res && res.json) {
    res.json(result);
  } else {
    return result;
  }
}
