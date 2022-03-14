const baseRefTokens = {
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    150: "#dadada",
  },
}

const baseSysTokens = {
  "on-primary": "#345bac",
}

const baseCompTokens = {
  fab: "#345bac",
}

class baseTokens {
  ref // Reference tokens
  sys // System tokens
  comp // Component tokens

  constructor() {
    this.ref = baseRefTokens
    this.sys = baseSysTokens
    this.comp = baseCompTokens
  }
}

class darkTokens extends baseTokens {
  constructor() {
    super()
  }
}

const baseColors = {
  ref: {
    gray: {
      50: "#fafafa",
    },
  },
  sys: {
    "on-primary": "#fafafa",
  },
  comp: {
    fab: {
      container: "#fafafa",
    },
  },
  gray: {
    50: "#f3f5f8",
  },
  // light colors
  primary: {
    DEFAULT: "#1da1f2",
    lighter: "#345bac",
  },
}
const darkColors = {
  ...baseColors,
  primary: {
    DEFAULT: "#345bac",
    lighter: "#1da1f2",
  },
}
const aquaColors = {}

exports.baseColors = baseColors
exports.darkColors = darkColors
exports.aquaColors = aquaColors
