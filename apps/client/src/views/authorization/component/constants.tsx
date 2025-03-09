import {
  ConfirmationIcon,
  FullConfirmationIcon,
  GuildInformationIcon,
  IdentityConfirmationIcon,
  type LevelPropsType,
  UserBankCardIcon,
  UserSquareIcon,
  UserSquareThreeLinesIcon,
} from '../imports'

export const BaseLevelDisableProps: LevelPropsType = {
  backgroundColor: 'bg-tint-100',
  fadingCircle: 'bg-[#01BC8D]/20',
  bgRounded: 'basis-full bg-tint-100',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
  cardIcon: <UserSquareIcon color="#01BC8D" className="w-8 h-8" />,
  external: 'baseLevel',
  description: 'baseLevelDescription',
}

export const PendingLevelProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-tint-100',
  cardIcon: <UserSquareThreeLinesIcon className="w-8 h-8" />,
  external: 'baseLevel',
  description: 'baseLevelDescription',
  qualificationIcon: <ConfirmationIcon className="w-8 h-8" />,
}

export const FirstLevelDisableProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  external: 'firstLevel',
  description: 'firstLevelDescription',
  cardIcon: <UserSquareThreeLinesIcon />,
}

export const FirstLevelPendingProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <UserBankCardIcon />,
  external: 'firstLevel',
  description: 'firstLevelDescription',
}

export const FirstLevelEnableProps = {
  backgroundColor: 'bg-tint-100',
  fadingCircle: 'bg-[#01BC8D]/20',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <UserSquareThreeLinesIcon className="w-8 h-8 !stroke-[#01BC8D]" />,
  external: 'firstLevel',
  description: 'firstLevelDescription',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const SecondLevelDisableProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  cardIcon: <UserBankCardIcon />,
  external: 'secondLevel',
  description: 'secondLevelDescription',
}

export const SecondLevelPendingProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <UserBankCardIcon />,
  external: 'secondLevel',
  description: 'secondLevelDescription',
}
export const SecondLevelEnableProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <UserBankCardIcon className="w-8 h-8 !stroke-primary " />,
  external: 'secondLevel',
  description: 'secondLevelDescription',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const ThirdLevelDisableProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <IdentityConfirmationIcon color="#AEAEAE" />,
  external: 'thirdLevel',
  description: 'thirdLevelDescription',
}

export const ThirdLevelPendingProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  cardIcon: <IdentityConfirmationIcon className="w-8 h-8 !stroke-primary " />,
  external: 'thirdLevel',
  description: 'thirdLevelDescription',
}

export const ThirdLevelEnableProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <IdentityConfirmationIcon className="w-8 h-8 !stroke-primary " />,
  external: 'thirdLevel',
  description: 'thirdLevelDescription',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const FourthLevelDisableProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <GuildInformationIcon />,
  external: 'fourthLevel',
  description: 'fourthLevelDescription',
}
export const FourthLevelPendingProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <GuildInformationIcon />,
  external: 'fourthLevel',
  description: 'fourthLevelDescription',
}
export const FourthLevelEnableProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <GuildInformationIcon className="w-8 h-8 !stroke-primary " />,
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
  external: 'fourthLevel',
  description: 'fourthLevelDescription',
}

// ------------------------------------
