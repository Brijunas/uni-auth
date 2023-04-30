import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)<{ component?: React.ElementType; to?: string }>({ marginTop: 16, marginBottom: 16 })

export default StyledButton
