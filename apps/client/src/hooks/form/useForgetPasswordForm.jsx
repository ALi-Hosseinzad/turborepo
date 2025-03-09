import { useCallback, useState } from 'react'
import { EMAIL_REGEX } from '@/constants/regex'

// import { AuthContext } from '@/context/authContext'

export function useForgetPasswordForm() {
  // const { setStepWizard, setEmailRef, forgetPassword, loading } =
  //   useContext(AuthContext)

  const [profile, setProfile] = useState({
    email: '',
  })

  const [isTouched, setIsTouched] = useState({
    email: false,
  })

  const [errors, setErrors] = useState({})
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'email':
        return !EMAIL_REGEX.test(value)
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
      // forgetPassword(profile)
      // setEmailRef('legalUserForgetPassword')
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
