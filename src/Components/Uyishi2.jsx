import React from 'react'
import { useForm } from 'react-hook-form'

const Uyishi2 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    const watchedName = watch('name');

    return (
        <form className="w-80 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1">
                <input
                    className="border border-gray-300 px-3 py-2 rounded"
                    {...register('name', { required: "userName is required" })}
                    placeholder="Enter userName"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    className="border border-gray-300 px-3 py-2 rounded"
                    {...register('password', { required: "Password is required" })}
                    placeholder="Enter password"
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <input
                    className="border border-gray-300 px-3 py-2 rounded"
                    {...register('Typing', { required: "Typing is required" })}
                    placeholder="Typing"
                />
                {errors.Typing && (
                    <p className="text-red-500 text-sm">{errors.Typing.message}</p>
                )}
            </div>

            <div className="flex gap-1">
                <input
                    type="checkbox"
                    className="border border-gray-300 px-3 py-2 rounded"
                    {...register('checkbox', { required: "Checkbox is required" })}
                />
                {errors.checkbox && (
                    <p className="text-red-500 text-sm">{errors.checkbox.message}</p>
                )}
                <p>Remember Me</p>
            </div>

            <div className="flex flex-col gap-1  ">

                <div className="flex gap-5">
                    <input
                        type="checkbox"
                        className=" border border-gray-300 px-3 py-2 rounded-full"
                        {...register('checkbox', { required: "Checkbox is required" })}
                    />
                    {errors.checkbox && (
                        <p className="text-red-500 text-sm">{errors.checkbox.message}</p>
                    )}
                    <p className="text-blue-700 text-sm">Radio Selection 1 </p>
                </div>

                <div className="flex gap-5">
                    <input
                        type="checkbox"
                        className=" border border-gray-300 px-3 py-2 rounded-full"
                        {...register('checkbox', { required: "Checkbox is required" })}
                    />
                    {errors.checkbox && (
                        <p className="text-red-500 text-sm">{errors.checkbox.message}</p>
                    )}
                    <p className="text-blue-700 text-sm">Radio Selection 2 </p>

                </div>
                <div className="flex gap-5">
                    <input
                        type="checkbox"
                        className=" border border-gray-300 px-3 py-2 rounded-full"
                        {...register('checkbox', { required: "Checkbox is required" })}
                    />
                    {errors.checkbox && (
                        <p className="text-red-500 text-sm">{errors.checkbox.message}</p>
                    )}
                    <p className="text-blue-700 text-sm">Radio Selection 3 </p>
                </div>


            </div>



            <div className="flex flex-col gap-1">
                <select
                    className="border border-gray-300 px-3 py-2 rounded"
                    {...register('select', { required: "Select is required" })}
                >
                    <option value="option1">Dropdown option 1 </option>
                    <option value="option2">Dropdown option 2</option>
                    <option value="option3">Dropdown option 3</option>
                </select>
                {errors.select && (
                    <p className="text-red-500 text-sm">{errors.select.message}</p>
                )}
            </div>

            <div className="w-80  flex gap-30">
                <button type="submit" className="w-25 bg-white text-gray-700 px-4 py-2 rounded border border-blue-700">
                    Cancel
                </button>
                <button type="submit" className="w-25 bg-blue-500 text-white px-4 py-2 rounded">
                    Next
                </button>
            </div>
        </form>
    )



}

export default Uyishi2