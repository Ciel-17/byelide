import type { Ref } from 'vue'

export function validateTagProp(tag?: Ref) {
  if (tag) {
    if (typeof tag === 'string') return true
    if (typeof tag === 'object') {
      if (
        typeof tag.value === 'string' ||
        typeof tag.value === 'function' ||
        typeof tag.value === 'object'
      ) {
        return true
      }
    }
    return false
  }
  return true
}

const isArray = function (obj: unknown) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

export function getTagProps(ctx: any, tagClasses?: string) {
  const tag = ctx.$props.tag
  if (tag) {
    if (typeof tag === 'string') {
      const result: any = { value: tag }
      if (tagClasses) {
        result.props = { class: tagClasses }
      }
      return result
    } else if (typeof tag === 'object') {
      const result = { value: tag.value || 'div', props: tag.props || {} }

      if (tagClasses) {
        if (result.props.class) {
          if (isArray(result.props.class)) {
            result.props.class.push(tagClasses)
          } else {
            result.props.class = [tagClasses, result.props.class]
          }
        } else {
          result.props.class = tagClasses
        }
      }

      return result
    }
  }
  return { value: 'div' }
}
