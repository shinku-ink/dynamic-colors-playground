const baseRefTokens = {
  gray: {
    50: "#fafafa",
    100: "#f5f5f5",
    150: "#dadada",
  },
}

const baseSysTokens = {
  primary: "var(--md-sys-color-primary)",
  "on-primary": "var(--md-sys-color-on-primary)",
  "primary-container": "var(--md-sys-color-primary-container)",
  "on-primary-container": "var(--md-sys-color-on-primary-container)",

  secondary: "var(--md-sys-color-secondary)",
  "on-secondary": "var(--md-sys-color-on-secondary)",
  "secondary-container": "var(--md-sys-color-secondary-container)",
  "on-secondary-container": "var(--md-sys-color-on-secondary-container)",

  tertiary: "var(--md-sys-color-tertiary)",
  "on-tertiary": "var(--md-sys-color-on-tertiary)",
  "tertiary-container": "var(--md-sys-color-tertiary-container)",
  "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",

  error: "var(--md-sys-color-error)",
  "on-error": "var(--md-sys-color-on-error)",
  "error-container": "var(--md-sys-color-error-container)",
  "on-error-container": "var(--md-sys-color-on-error-container)",

  surface: "var(--md-sys-color-surface)",
  "on-surface": "var(--md-sys-color-on-surface)",
  "surface-variant": "var(--md-sys-color-surface-variant)",
  "on-surface-variant": "var(--md-sys-color-on-surface-variant)",

  background: "var(--md-sys-color-background)",
  "on-background": "var(--md-sys-color-on-background)",

  "inverse-primary": "var(--md-sys-color-inverse-primary)",
  "inverse-on-primary": "var(--md-sys-color-inverse-on-primary)",
  "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",

  outline: "var(--md-sys-color-outline)",
  shadow: "var(--md-sys-color-shadow)",
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
  ref: baseRefTokens,
  sys: baseSysTokens,
  comp: baseCompTokens,
}
const darkColors = {
  ...baseColors,
}

const aquaColors = {}

exports.baseColors = baseColors
exports.darkColors = darkColors
exports.aquaColors = aquaColors
