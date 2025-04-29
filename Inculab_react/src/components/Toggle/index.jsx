import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Toogle({ label, value, setValue, className }) {
    return (
        <div className={'flex ' + className}>
            <div className='ml-1'>
                <Switch
                    checked={value}
                    onChange={setValue}
                    className={classNames(
                        value ? 'bg-blue-600' : 'bg-gray-200',
                        'relative inline-flex sm:h-7 sm:w-12 h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    )}
                >
                    <span className="sr-only">Use setting</span>
                    <span
                        className={classNames(
                            value ? 'translate-x-5' : 'translate-x-0',
                            'pointer-events-none relative inline-block sm:h-5 sm:w-5  h-4 w-4 sm:m-0.5  transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                    >
                        <span
                            className={classNames(
                                value ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            )}
                            aria-hidden="true"
                        >
                            <svg className="sm:h-4 sm:w-4  h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                                <path
                                    d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span
                            className={classNames(
                                value ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                            )}
                            aria-hidden="true"
                        >
                            <svg className="sm:h-4 sm:w-4  h-3 w-3  text-blue-600" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                            </svg>
                        </span>
                    </span>
                </Switch>
            </div>
            <label className="block sm:text-sm text-xs  font-medium text-gray-800 mb-2 ml-2">
                {label}
            </label>
        </div>
    )
}
