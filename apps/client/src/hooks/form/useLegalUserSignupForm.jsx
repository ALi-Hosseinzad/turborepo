import { useCallback, useEffect, useRef, useState } from 'react'
import {
  EMAIL_REGEX,
  JUST_PERSIAN_REGEX,
  PASSWORD_REGEX,
} from '@/constants/regex'

// import { AuthContext } from '@/context/authContext'

export function useLegalUserSignupForm() {
  // const { legalSignUp, loading } = useContext(AuthContext)

  const [profile, setProfile] = useState({
    userName: '',
    email: '',
    password: '',
    repeat_password: '',
  })
  const profileRef = useRef(profile)

  const [isTouched, setIsTouched] = useState({
    userName: false,
    email: false,
    password: false,
    repeat_password: false,
  })
  useEffect(() => {
    profileRef.current = profile
  }, [profile])

  const [errors, setErrors] = useState({})
  const validateField = useCallback((name, value) => {
    const currentProfile = profileRef.current // Use the ref to access the current profile

    switch (name) {
      case 'email':
        return !EMAIL_REGEX.test(value)
      case 'userName':
        return !JUST_PERSIAN_REGEX.test(value)
      case 'password':
        return !PASSWORD_REGEX.test(value)
      case 'repeat_password':
        return value !== currentProfile.password
      default:
        return false
    }
  }, [])
  const handleChange = (name, value) => {
    setProfile((prev) => ({ ...prev, [name]: value }))
    if (isTouched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (name) => {
    setIsTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, profile[name]),
    }))
  }

  const handleSubmit = () => {
    const newErrors = {}
    Object.keys(profile).forEach((key) => {
      newErrors[key] = validateField(key, profile[key])
      setIsTouched((prev) => ({ ...prev, [key]: true }))
    })
    setErrors(newErrors)
    if (!Object.values(newErrors).some(Boolean)) {
      // const params = {
      //   email: profile.email,
      //   company_name: profile.userName,
      //   password: profile.password,
      //   password_confirmation: profile.repeat_password,
      // }
      // legalSignUp(params)
    }
  }

  return {
    profile,
    errors,
    isTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    // isSubmitting: loading, // Replace with actual loading state logic
    isSubmitting: false, // Replace with actual loading state logic
  }
}
