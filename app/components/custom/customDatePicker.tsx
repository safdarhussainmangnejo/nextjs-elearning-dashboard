'use client'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import DatePicker from '@mui/lab/DatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { FormControl, FormHelperText, TextField, Typography } from '@mui/material'
import { parseISO } from 'date-fns'
import { Controller } from 'react-hook-form'

interface DatePickerProps {
  control: any
  name: string
  label: string
  required?: boolean
  disableFuture?: boolean
  disablePast?: boolean
  disabled?: boolean
  errors?: any
  views?: any
  min?: undefined | Date
  dateFormat?: string | undefined
}

const CustomDatePicker = ({
  control,
  name = '',
  label = '',
  required = false,
  disableFuture = false,
  disablePast = false,
  disabled = false,
  errors,
  min = undefined,
  views = ['year', 'month', 'day'],
  dateFormat = 'dd/MM/yyyy'
}: DatePickerProps) => {
  return (
    <FormControl style={{ width: '100%' }}>
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field: { value, onChange, onBlur } }) => {
          return (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                // readOnly={disabled}
                openTo='day'
                inputFormat={dateFormat}
                // disablePast={disablePast}
                // disableFuture={disableFuture}
                label={label}
                // minDate={min}
                value={value || null}
                // views={views}
                onChange={onChange}
                renderInput={(params: any)=> (
                  <TextField
                    // sx={{ borderColor: 'red', border: 2, bgcolor: 'red' }}
                    onBlur={onBlur}
                    size='small'
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          )
        }}
      />
      {errors?.[name] && <FormHelperText sx={{ color: 'error.main' }}>{errors[name].message}</FormHelperText>}
    </FormControl>
  )
}
export default CustomDatePicker