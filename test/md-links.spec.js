const { mdLinks } = require('../index.js');


describe('mdLinks', () => {

  it('should return extracted links without validation when validate option is false', () => {
    return mdLinks('./test/files/malu.md', {validate: false}).then((links) => {
      expect(links).toStrictEqual([
        {href: "https://malu-linda.com.br", text: "malu", file: "./test/files/malu.md"},
        {href: "https://malu2-linda2.com.br", text: "malu2", file: "./test/files/malu.md"},
        {href: "https://ronccc", text: "mimimi", file: "./test/files/malu.md"},    
    ])
    })
  });
});

it('should return extracted links with validation when validate option is true', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    status: 200
}));
  return mdLinks('./test/files/malu.md', {validate: true}).then((links) => {
    expect(links).toStrictEqual([
      {href: "https://malu-linda.com.br", text: "malu", file: "./test/files/malu.md", status: 200, ok: "ok"},
      {href: "https://malu2-linda2.com.br", text: "malu2", file: "./test/files/malu.md", status: 200, ok: "ok"},
      {href: "https://ronccc", text: "mimimi", file: "./test/files/malu.md", status: 200, ok: "ok"},    
  ])
  })
});

it('should return extracted links with validation when validate option is true', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    status: 404
}));
  return mdLinks('./test/files/malu.md', {validate: true}).then((links) => {
    expect(links).toStrictEqual([
      {href: "https://malu-linda.com.br", text: "malu", file: "./test/files/malu.md", status: 404, ok: "fail"},
      {href: "https://malu2-linda2.com.br", text: "malu2", file: "./test/files/malu.md", status: 404, ok: "fail"},
      {href: "https://ronccc", text: "mimimi", file: "./test/files/malu.md", status: 404, ok: "fail"},    
  ])
  })
});

it('should return extracted links with validation when validate option is true', () => {
  global.fetch = jest.fn(() => Promise.reject({}));
  return mdLinks('./test/files/malu.md', {validate: true}).then((links) => {
    expect(links).toStrictEqual([
      {href: "https://malu-linda.com.br", text: "malu", file: "./test/files/malu.md", status: 'invalid link', ok: "fail"},
      {href: "https://malu2-linda2.com.br", text: "malu2", file: "./test/files/malu.md", status: 'invalid link', ok: "fail"},
      {href: "https://ronccc", text: "mimimi", file: "./test/files/malu.md", status: 'invalid link', ok: "fail"},    
  ])
  })
});

