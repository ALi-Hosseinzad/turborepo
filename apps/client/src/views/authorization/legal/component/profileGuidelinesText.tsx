'use client'

import type { ProfileGuidelinesTextProps } from '@/types/authorization/useProfileViewModel'
import { useTranslations } from '@/views/authorization/imports'

const ProfileGuidelinesText: React.FC<ProfileGuidelinesTextProps> = ({
  guidelinesTextKeys,
}) => {
  const t = useTranslations()

  return (
    <ul className="list-disc grid grid-cols-1 items-start justify-start sm:w-full gap-2 pr-5">
      <p className="-mr-4 font-bold">{t(guidelinesTextKeys.title)}</p>
      {guidelinesTextKeys.items.map((key, index) => (
        <li key={index}>{t(key)}</li>
      ))}
    </ul>
  )
}

export default ProfileGuidelinesText
