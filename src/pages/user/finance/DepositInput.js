// @mui
import { useState, useEffect, useRef,React, useMemo } from 'react';

import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import { Switch, Divider, Typography, Stack,TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { useSnackbar } from 'notistack';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';

import {
  FormProvider,
   RHFSelect,
   RHFTextField,
  } from '../../../components/hook-form';
  import axios from '../../../utils/axios';

  import { fCurrency } from '../../../utils/formatNumber';
  import useAuth from '../../../hooks/useAuth';
  import Page from '../../../components/Page';

  // ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));




 

// ----------------------------------------------------------------------

export default function PaymentSummary() {
   const { enqueueSnackbar } = useSnackbar();

  const forminput = Yup.object().shape({
    number: Yup.string().required('Enter ID Numner'),
    expiry: Yup.string().required('ID expiry date is required'),
    issued_date: Yup.string().required('ID issued date is required'),
    type: Yup.string().required('Please select ID type'),
    image: Yup.array().min(1, 'Image is required'),
   });

  const defaultValues = useMemo(
    () => ({
      name:  '',
    }),
    
   );

  const methods = useForm({
     defaultValues,
  });

  const {
    reset,
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
       reset(defaultValues);
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  
  const onSubmit = async (event, formState) => {
    try { 
      await new Promise((resolve) => setTimeout(resolve, 500));
      const form = document.querySelector("form");
      const formData = new FormData(form);

      axios.post('/user/deposit/insert', formData,{ 
        headers: {
          "Content-Type": "multipart/form-data",
        },
        amount: formState.amount,
        currency: formState.currency,
        method_code: formState.method_code, 
       })
      .then(res => { 
        if(res.data.code === 200)
        {
          enqueueSnackbar(res.data.message);
        }
        else
        {
          enqueueSnackbar(res.data.message, {variant:'error'});
        }
       
      })
      reset();
     } catch (error) {
      console.error(error);
    }
  };

   
  const [post, setPost] = useState(null);
  const {general} = useAuth();

  useEffect(() => {
    axios.get('/user/deposit/methods').then((response) => {
      setPost(response);
      console.log(response);
     
    });
  }, []);
  if (!post) return null;
  const results = JSON.stringify(post.data.data.methods);
  const CATEGORY_OPTION = JSON.parse(results);
  const getgateway = (event) => {
    try {
    const amount = document.getElementById('amount').value;
    const min = fCurrency(event.target.options[event.target.selectedIndex].dataset.min);
    const currency = event.target.options[event.target.selectedIndex].dataset.currency;
     const max = fCurrency(event.target.options[event.target.selectedIndex].dataset.max);
     const fixed = fCurrency(event.target.options[event.target.selectedIndex].dataset.fixed);
     const percent = event.target.options[event.target.selectedIndex].dataset.percent;
     const value = event.target.value;
     document.getElementById("currency").value = currency;
     document.getElementById("mini").innerHTML = min;
     document.getElementById("maxi").innerHTML = max;
     document.getElementById("fixed").innerHTML = fixed;
     document.getElementById("percent").innerHTML = percent;
     const percentage = percent/100*amount;
     document.getElementById("total").innerHTML = +percentage+ +amount;
     document.getElementById("fees").innerHTML = percentage;
     getamount(fixed, percent, min, max);
    } catch (error) {
      console.error(error);
    }
  }; 

  const getamount = (event, min) => {
    try {
     const amount = event.target.value;
      document.getElementById("total").innerHTML = amount;
    } catch (error) {
      console.error(error);
    }
  }; 
 
 
  
  
  return (
    <Page>
    <RootStyle>
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
      <Stack spacing={2.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" component="p" sx={{ color: 'text.secondary' }}>
            Fund Wallet
          </Typography>
        </Stack>
        <Stack spacing={3} mt={5}>
        <TextField type="number" name="amount" id="amount" onKeyUp={getgateway} fullWidth label="Amount" />
          </Stack>
        <input id="currency" hidden name="currency"/>
        <Stack spacing={3} mt={5}>
        <RHFSelect name="method_code" label="Payment Gateway" onChange={getgateway}>
          
                  {CATEGORY_OPTION.map((category) => (
                    <option data-min={category.min_amount} data-currency={category.currency} data-max={category.max_amount}  data-percent={category.percent_charge}  data-fixed={category.fixed_charge} key={category.id} value={category.method_code}>
                          {category.name}
                    </option>
                   ))}
                </RHFSelect>

        </Stack>


        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" component="p" sx={{ color: 'text.secondary' }}>
          Min:  <a id="mini">0</a>
          </Typography> 
          <Typography variant="subtitle2" component="p" sx={{ color: 'text.secondary' }}>
          Max: <a id="maxi">0</a>
          </Typography> 
        </Stack> 
        <Stack direction="row" justifyContent="space-between">
          <Typography component="p" variant="subtitle2" sx={{ color: 'text.secondary' }}>
         Fee {general.cur_sym}: <a id="fixed">0</a>
          </Typography> 
          <Typography component="p" variant="subtitle2" sx={{ color: 'text.secondary' }}>
         Fee %: <a id="percent">0</a>
          </Typography>
         </Stack>

        

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" component="p">
            Total Amount
          </Typography>
          <Typography variant="h6" component="p">
          {general.cur_sym}<a id="total">0.00</a>
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed', mb: 1 }} />
      </Stack>

      <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
        * Plus transaction fees {general.cur_sym}<a id="fees">0</a>
      </Typography>
 
      <LoadingButton type="submit"  fullWidth size="large" variant="contained" sx={{ mt: 5, mb: 3 }} loading={isSubmitting}>
              {'Deposit Now'}
      </LoadingButton>
 
     
      <Stack alignItems="center" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Iconify icon={'eva:shield-fill'} sx={{ width: 20, height: 20, color: 'primary.main' }} />
          <Typography variant="subtitle2">Secure online payment</Typography>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          This is a secure 128-bit SSL encrypted payment
        </Typography>
      </Stack>
      </FormProvider>
    </RootStyle>
    </Page>
  );
}
