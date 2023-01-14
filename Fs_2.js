// Development Environment
window.onload = (event) => {
  console.log("You need to Install Nerdamer before doing anything! If this message pops up, you're all good!");
};

class CodeBlock {
  constructor(code, index) {
    this.code = code
    this.index = index
  }
}
function print(o) {
  console.log(o)
}

function AddLib(lib) {
  console.warn(`Library ${lib} Has Been Added`)
}

function obj(name, value) {
  window[name] = value
}

function code_block(name, code, index) {
  window[name] = new CodeBlock(code, index)
}
const Init__ = {
  NodeJs: function() {
    console.warn(`Initialized Node.JS to Fragment.nix file`);
  },
  Pylance: function() {
    console.warn(`Initialized Pylance to Fragment.nix file`)
  },
  Rust: function() {
    console.warn(`Initialized Rust to Fragment.nix file`)
  },
  writable: false
}
const Ln = {
  throw: {
    message: function(m) {
      console.log(m)
    },
    warning: function(m) {
      console.warn(m)
    },
    err: function(m) {
      console.error(m)
    },
    messageN: function(m) {
      console.log(m + '\n')
    },
  },
  say: function(m) {
    alert(m)
  },
  ask: function(p) {
    prompt(p)
  }
}
const Ma = {
  raise: function(x, y) {
    return Math.pow(x, y)
  },
  root: function(x, y) {
    return Math.pow(x, 1 / y)
  },
  digitNCalc: function(x, y) {
    return x.toFixed(y)
  },
  digitN: function() {
    function count(numb) {
      return numb.toString().split('.')[1].length;
    }
  },
  PI: Math.PI,
  sin: function(x) {
    return Math.sin(x)
  },
  log: function(x) {
    return log10(x)
  },
  logn: function(x, base) {
    return Ma.log(x) / Ma.log(base)
  },
  logE: function(x) {
    return Math.log(x)
  },
  deriv: function(x, n, ex) {
    nerdamer(`diff(${ex}, ${x}, ${n})`)
  },
  rand: function(x) {
    return Math.floor(Math.random() * x) + 1
  },
  aderiv: function(exp, dx) {
    nerdamer(`integrate(${exp}, ${dx})`)
  }
}

function exec(name, code, params) {
  window[name] = function(params) {
    eval(code)
  }
}

function open(link) {
  window.open(link, '_blank');
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function val(str) {
  return eval(str)
}

function writeToHTML(html) {
  document.write(html)
}

function editHTML(id, val) {
  document.getElementById(id).innerHTML = val
}

function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

function newtag(name, constructor, extendon) {
  define(name, constructor, extendon)

}

//Testing Environment
//#add below.nix
