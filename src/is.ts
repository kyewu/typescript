type Ref = {
  __v_isRef: true
}

export function isRef(r: any): r is Ref {
  return Boolean(r && r.__v_isRef === true)
}