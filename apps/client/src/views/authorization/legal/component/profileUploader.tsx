import type { ProfileUploaderPropsType } from '@/views/authorization/imports'
import { FormikUploader } from '@/views/authorization/imports'

const ProfileUploader: React.FC<ProfileUploaderPropsType> = ({
  name,
  isVerify,
  icon,
  textIcon,
}) => {
  return (
    <FormikUploader
      name={name}
      classNameImagePreview="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      uploadAreaClass={`!h-[225px] ${!isVerify ? 'hover:blur-sm' : ''}`}
      disabled={isVerify}
      placeholder={
        <div className="flex flex-col gap-y-5 text-trueGray-700 text-sm justify-center items-center m-auto h-[225px]">
          <p className="flex gap-2">{icon}</p>
          <span className="text-center text-green-300">{textIcon}</span>
        </div>
      }
      onloadHandler={() => {
        // handle load
      }}
    />
  )
}

export default ProfileUploader
