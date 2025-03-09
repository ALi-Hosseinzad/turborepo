import {
  IconButton,
  InputAdornment,
  Visibility,
  VisibilityOff,
} from '../../imports'

const EndAdornmentPassword = ({ showPassword, setShowPassword }) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        edge="end"
        onClick={() => setShowPassword((prev: boolean) => !prev)}
      >
        {showPassword ? (
          <Visibility className="text-trueGray-500" />
        ) : (
          <VisibilityOff className="text-trueGray-500" />
        )}
      </IconButton>
    </InputAdornment>
  )
}

export default EndAdornmentPassword
