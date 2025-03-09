import {
  Avatar,
  type ProfileMenuViewProps,
  ProfileModal,
  UseProfileLevel,
  UseProfileName,
} from '../import'

const ProfileMenuView: React.FC<ProfileMenuViewProps> = ({
  onClick,
  userData,
  handleClose,
  anchorEl,
}) => {
  return (
    <>
      <div className="flex flex-row-reverse gap-2 lg:gap-6 items-center">
        <Avatar
          className="cursor-pointer"
          alt="User Avatar"
          src={userData?.avatar?.path}
          sx={{
            width: { xs: 40, sm: 45, md: 50 },
            height: { xs: 40, sm: 45, md: 50 },
          }}
          onClick={onClick}
        />
        <div className="hidden flex-col gap-1 text-right  text-darkTypo md:flex">
          <p className="text-medium-sm leading-0">{UseProfileName(userData)}</p>
          <p className="text-normal-sm leading-0">
            {UseProfileLevel(userData)}
          </p>
        </div>
      </div>
      <ProfileModal
        userData={userData}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
    </>
  )
}

export default ProfileMenuView
