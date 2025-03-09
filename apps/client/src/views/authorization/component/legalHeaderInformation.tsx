import { FullConfirmationIcon, UserSquareThreeLinesIcon } from '../imports'
import {
  BarcodeIcon,
  BoxCloseIcon,
  ConfirmTheListIcon,
  FolderIcon,
  InactiveIcon,
  TickedBoxIcon,
  UserBankCardIcon,
} from 'ui/components/icons'

export const FirstLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  confirmation: <InactiveIcon className="w-4 h-4" />,
  external: 'firstLevel',
  description: 'firstLevelDescriptionLegal',
  cardIcon: <UserSquareThreeLinesIcon />,
}

export const FirstLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <UserBankCardIcon />,
  external: 'firstLevel',
  description: 'firstLevelDescriptionLegal',
}

export const FirstLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  fadingCircle: 'bg-[#01BC8D]/20',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <UserSquareThreeLinesIcon className="w-8 h-8 !stroke-[#01BC8D]" />,
  external: 'firstLevel',
  description: 'firstLevelDescriptionLegal',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const SecondLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  confirmation: <InactiveIcon className="w-4 h-4" />,
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  cardIcon: <FolderIcon />,
  external: 'secondLevel',
  description: 'secondLevelDescriptionLegal',
}

export const SecondLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <FolderIcon />,
  external: 'secondLevel',
  description: 'secondLevelDescriptionLegal',
}
export const SecondLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <FolderIcon className="w-8 h-8 !stroke-primary " />,
  external: 'secondLevel',
  description: 'secondLevelDescriptionLegal',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const ThirdLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  confirmation: <InactiveIcon className="w-4 h-4" />,

  cardIcon: <ConfirmTheListIcon color="#AEAEAE" />,
  external: 'thirdLevel',
  description: 'thirdLevelDescriptionLegal',
}

export const ThirdLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  cardIcon: <ConfirmTheListIcon className="w-8 h-8 !stroke-primary " />,
  external: 'thirdLevel',
  description: 'thirdLevelDescriptionLegal',
}

export const ThirdLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <ConfirmTheListIcon className="w-8 h-8 !stroke-primary " />,
  external: 'thirdLevel',
  description: 'thirdLevelDescriptionLegal',
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
}

export const FourthLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  // borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  confirmation: <InactiveIcon className="w-4 h-4" />,

  cardIcon: <BoxCloseIcon />,
  external: 'fourthLevel',
  description: 'fourthLevelDescriptionLegal',
}
export const FourthLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <BoxCloseIcon />,
  external: 'fourthLevel',
  description: 'fourthLevelDescriptionLegal',
}
export const FourthLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <BoxCloseIcon className="w-8 h-8 !stroke-primary " />,
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
  external: 'fourthLevel',
  description: 'fourthLevelDescriptionLegal',
}

export const FifthLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  cardIcon: <BarcodeIcon />,
  confirmation: <InactiveIcon className="w-4 h-4" />,
  external: 'fifthLevel',
  description: 'fifthLevelDescriptionLegal',
}
export const FifthLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',
  confirmation: <InactiveIcon className="w-4 h-4" />,

  cardIcon: <BarcodeIcon />,
  external: 'fifthLevel',
  description: 'fifthLevelDescriptionLegal',
}
export const FifthLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <BarcodeIcon className="w-8 h-8 !stroke-primary " />,
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
  external: 'fifthLevel',
  description: 'fifthLevelDescriptionLegal',
}

export const SixthLevelDisableLegalProps = {
  backgroundColor: '!bg-trueGray-200',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  confirmation: <InactiveIcon className="w-4 h-4" />,
  cardIcon: <TickedBoxIcon />,
  external: 'sixthLevel',
  description: 'sixthLevelDescriptionLegal',
}
export const SixthLevelPendingLegalProps = {
  backgroundColor: 'bg-white',
  bgRounded: 'basis-full bg-trueGray-500',
  style: ' sm:flex flex-row ',
  borderRadius: 'rounded-md border-2 border-[#4A9BFF]',

  cardIcon: <TickedBoxIcon />,
  external: 'sixthLevel',
  description: 'sixthLevelDescriptionLegal',
}
export const SixthLevelEnableLegalProps = {
  backgroundColor: 'bg-tint-100',
  bgRounded: 'basis-full bg-primary',
  cardIcon: <TickedBoxIcon className="w-8 h-8 !stroke-primary " />,
  confirmation: <FullConfirmationIcon className="w-4 h-4" />,
  external: 'sixthLevel',
  description: 'sixthLevelDescriptionLegal',
}
