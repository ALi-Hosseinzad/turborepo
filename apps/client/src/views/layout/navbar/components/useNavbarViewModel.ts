import type { NavbarViewModelType, RootState } from '../import'
import { useSelector, useState } from '../import'

export default function UseNavbarViewModel(): NavbarViewModelType {
  const { user: userData } = useSelector((state: RootState) => state.persist)

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  return {
    userData,
    anchorEl,
    setAnchorEl,
  }
}
