import styled from "styled-components";
import  {shouldForwardProps} from './shared'
const Flex = styled.div`
display:flex;
justify-content : ${((justifyContent) => justifyContent ?  justifyContent : null )}
align-items : ${((alignItems) => alignItems ?  alignItems : null )}
`
Flex.displayName = "Primitives.Flex"

export default Flex