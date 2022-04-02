export function createElement(type = 'div', props = {}) {
    const element = document.createElement(type);
    
    Object.keys(props).forEach((name) => {
      element[name] = props[name];
    });
  
    return element;
  }
  
export function compile(tpl, variables = {}) {
  return Object.keys(variables).reduce((result, key) => {
    return result.replace(`{${key}}`, variables[key]);
  }, tpl);
}