import { useEffect, useState } from "react";
import { Box, Button, InputBase , styled } from "@mui/material";
import { EmojiEmotionsOutlined ,  AttachFile , Mic} from "@mui/icons-material";
import { uploadFile } from "../../../service/api";
import InputEmoji from "react-input-emoji";



const Container = styled(Box)`
    heigth : 55px;
    background : #ededed;
    padding : 0px 16px;
    display : flex;
    width : 100%;
    align-items : center;
    & > * {
        margin : 5px;
        color : #919191;
    }
`;

const Search = styled(Box)`
    background-color : #FFFFFF;
    border-radius : 18px;
    width : calc(95% - 100px);
    
    
`;

const InputField = styled(InputBase)`
    width : 100%;
    padding : 20px;
    height : 20px;
    padding-left :25px;
    font-size : 14px;
`;

const ClipIcon = styled(AttachFile)`
    transform : rotate(40deg);
`

const Footer = ({sendText , setValue, value, file, setFile, setImage}) => {

    const [emoji, setEmoji] = useState("");




    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

             let response = await uploadFile(data);
             setImage(response.data);
              
            }
        }
        getImage()
    }, [file])

   const onFileChange = (e) => {
        
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
   }


    return(
        <Container>

           <EmojiEmotionsOutlined/>
       
            <label htmlFor="fileInput">
                <ClipIcon/>
            </label>
            <input 
                type="file" 
                id="fileInput"
                style={{display : 'none'}}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField 
                placeholder="Type a message"
                onChange={ (e) => setValue(e.target.value)}
                onKeyDown={ (e) => sendText(e)}
                value={value}
                /> 
            </Search>
            <Mic/>
        </Container>
    )
}

export default Footer;






// <Button onClick={ () => setPickerVisible((!pickerVisible))}>
// <EmojiEmotionsOutlined />
// </Button>
// <div className={pickerVisible ? 'd-block' : 'd-none'}>
//     <Picker 
//         data={data} 
//         previewPosition = "none" 
//         onEmojiSelect={ (e) => {
//             setCurrentEmoji(e.native);
//             setPickerVisible(!pickerVisible);
//         }} />
// </div>
    