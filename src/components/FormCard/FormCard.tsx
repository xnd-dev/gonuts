import { MapPinLine } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/theme";
import { FormCardContainer, SpanContainer1, SpanContainer2, FormContainer, InputContainer} from './styles';
import { useRouter } from 'next/router';
import { FieldValues, useForm } from "react-hook-form";
import { SelectValue } from '@radix-ui/react-select';


interface FormCardProps {
    paymentType: string,
}

export function FormCard ({paymentType}: FormCardProps)  {
    const {register, handleSubmit, setValue} = useForm();
    const router = useRouter();
    function FormCardSubmit(data: FieldValues)
        {   router.push({pathname: '/success',query: {...data , paymentType:paymentType}}, '/success');
        }

    async function AddressByCEP(CEP: string){
        await fetch('https://viacep.com.br/ws/'+CEP+'/json/')
        .then(response => response.json())
        .then(data => {
            if (data.erro){
                alert('Ocorreu um erro. Verifique seu CEP ou entre em contato com a Go Donuts pelo telefone.');
            }
            else {
                setValue("city",data.localidade);
                setValue("stateAbbreviation",data.uf);
                setValue("street",data.logradouro);
                setValue("district",data.bairro);
            }

        })
        .catch((err) => {console.log(err.message);});        
    }
        
     
    return(
        <FormCardContainer>
            <div className='formCardHeader'>
                <MapPinLine color={defaultTheme.acquaDark} size={'1.375rem'} />
                <div >
                    <SpanContainer1> Endereço de Entrega</SpanContainer1>
                    <SpanContainer2> Informe o endereço onde deseja receber seu pedido</SpanContainer2>
                </div>
            </div>

            <FormContainer 
            id='formClientData' 
            name='formClientData'
            method="POST" 
            onSubmit={handleSubmit((data)=>{FormCardSubmit(data);})}
            >
                <InputContainer
                pattern="[0-9]{5}-[0-9]{3}$"
                {...register("CEP")} 
                type="text"
                placeholder = 'CEP'
                onChange={async (e)=>{
                    const cep=e.currentTarget.value;
                    if (e.currentTarget.validity.valid) {await AddressByCEP(cep)} 
                    else {
                        if (cep.length>5) {
                            if (cep.search('-')==-1){e.currentTarget.value=cep.substring(0,5)+"-"+cep.substring(5);}
                            if (e.currentTarget.value.length>9) {e.currentTarget.value=cep.substring(0,8);}
                        }
                    };}
                }
                width = {'12.5rem'}
                />

                <InputContainer 
                type="text"
                {...register("street")} 
                placeholder = 'Rua' 
                width = {'35rem'}
                />

                <InputContainer 
                type="number"
                placeholder = 'Número' 
                {...register("houseNumber")} 
                width = {'12.5rem'} 
                />

                <div>
                    <InputContainer
                        placeholder = 'complement'
                        type="text"
                        {...register("Complemento", { required: false })} 
                        width = {'21.75rem'}
                        />
                    <span className='complementLabel' >
                        Opcional
                    </span>
                </div>

                <InputContainer 
                placeholder = 'Bairro' 
                {...register("district")} 
                type="text"
                width = {'12.5rem'} 
                />

                
                <InputContainer 
                placeholder = 'Cidade' 
                {...register("city")} 
                type="text"
                width = {'17.25rem'} 
                disabled
                alt='Você precisa preencher o CEP'                
                title='Você precisa preencher o CEP'
                />

                <InputContainer 
                placeholder = 'UF' 
                {...register("stateAbbreviation")} 
                type="text"
                disabled 
                alt='Você precisa preencher o CEP'
                title='Você precisa preencher o CEP'
                width = {'3.75rem'}
                />
            </FormContainer>
        </FormCardContainer>
    )
}
