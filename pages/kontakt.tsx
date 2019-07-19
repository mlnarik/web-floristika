import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import styled from '@emotion/styled';
import FormControl from '@material-ui/core/FormControl';

const LinkA = styled.a`
    text-decoration: none;
    color: inherit;
`

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 5rem;
`

const Kontakt = () => {
    const [state, setState] = useState({
        fullName: '',
        emailAddress: '',
        requestType: null,
        text: '',
    });

    const changeName = (e) => { setState({...state, fullName: e.target.value}) };
    const changeEmailAddress = (e) => { setState({...state, emailAddress: e.target.value}) };

    return (
        <>

        <FormDiv>

            <FormControl >
                <Button variant="contained" color="primary">
                    <LinkA href="tel:+420731336238">Přímo zavolat na 📞 +420 731 336 238</LinkA>
                </Button>    

                <TextField
                    id="standard-name"
                    label="Vaše celé jméno"
                    value={state.fullName}
                    onChange={changeName}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Emailová adresa"
                    value={state.emailAddress}
                    onChange={changeEmailAddress}
                    margin="normal"
                />    

                <Button variant="contained" color="primary">
                    Odeslat
                </Button>    
            </FormControl>    
        </FormDiv>
        </>
    )
}

export default Kontakt;