import { Picker } from 'react-native'
import extractProps from './extractProps'

export const setCustomPicker = customProps => {
  const PickerRender = Picker.render
  const initialDefaultProps = Picker.defaultProps
  Picker.defaultProps = {
    ...initialDefaultProps,
    ...customProps
  }
  Picker.render = function render(props) {
    let oldProps = props
    props = { ...props, style: [customProps.style] }

    props = extractProps(props, oldProps)

    try {
      return PickerRender.apply(this, arguments)
    } finally {
      props = oldProps
    }
  }
}
