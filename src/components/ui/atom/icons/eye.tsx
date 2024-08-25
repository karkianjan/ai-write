import { type MouseEventHandler } from 'react';
import { type AnyAction } from '@reduxjs/toolkit';

interface LockProps {
  classname?: string;
  click?: AnyAction | MouseEventHandler<HTMLButtonElement> | undefined;
}

function EyeLock(props: LockProps) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.classname}
    >
      <path
        d="M1.66732 1.39168L2.73398 0.333344L16.6673 14.2667L15.609 15.3333L13.0423 12.7667C12.084 13.0833 11.0673 13.25 10.0007 13.25C5.83398 13.25 2.27565 10.6583 0.833984 7.00001C1.40898 5.53334 2.32565 4.24168 3.49232 3.21668L1.66732 1.39168ZM10.0007 4.50001C10.6637 4.50001 11.2996 4.7634 11.7684 5.23224C12.2373 5.70108 12.5007 6.33697 12.5007 7.00001C12.5011 7.28382 12.4532 7.56562 12.359 7.83334L9.16732 4.64168C9.43504 4.5475 9.71685 4.49959 10.0007 4.50001ZM10.0007 0.75001C14.1673 0.75001 17.7257 3.34168 19.1673 7.00001C18.4872 8.72768 17.3314 10.2273 15.834 11.325L14.6507 10.1333C15.8031 9.33616 16.7325 8.25756 17.3507 7.00001C16.677 5.62496 15.631 4.46649 14.3317 3.65626C13.0324 2.84604 11.5319 2.41658 10.0007 2.41668C9.09232 2.41668 8.20065 2.56668 7.36732 2.83334L6.08398 1.55834C7.28398 1.04168 8.60898 0.75001 10.0007 0.75001ZM2.65065 7.00001C3.32435 8.37506 4.37029 9.53354 5.66959 10.3438C6.96889 11.154 8.46943 11.5834 10.0007 11.5833C10.5757 11.5833 11.1423 11.525 11.6673 11.4083L9.76732 9.50001C9.18745 9.43786 8.64634 9.17907 8.23396 8.7667C7.82159 8.35432 7.56281 7.81321 7.50065 7.23334L4.66732 4.39168C3.84232 5.10001 3.15065 5.98334 2.65065 7.00001Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EyeShow(props: LockProps) {
  return (
    <svg
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.classname}
    >
      <path
        d="M9.67838 10.9951C10.7201 10.9951 11.6056 10.6307 12.3351 9.90178C13.0639 9.17234 13.4284 8.28678 13.4284 7.24512C13.4284 6.20345 13.0639 5.3179 12.3351 4.58845C11.6056 3.85956 10.7201 3.49512 9.67838 3.49512C8.63672 3.49512 7.75116 3.85956 7.02172 4.58845C6.29283 5.3179 5.92838 6.20345 5.92838 7.24512C5.92838 8.28678 6.29283 9.17234 7.02172 9.90178C7.75116 10.6307 8.63672 10.9951 9.67838 10.9951ZM9.67838 9.49512C9.05338 9.49512 8.52227 9.27623 8.08505 8.83845C7.64727 8.40123 7.42838 7.87012 7.42838 7.24512C7.42838 6.62012 7.64727 6.08873 8.08505 5.65095C8.52227 5.21373 9.05338 4.99512 9.67838 4.99512C10.3034 4.99512 10.8348 5.21373 11.2726 5.65095C11.7098 6.08873 11.9284 6.62012 11.9284 7.24512C11.9284 7.87012 11.7098 8.40123 11.2726 8.83845C10.8348 9.27623 10.3034 9.49512 9.67838 9.49512ZM9.67838 13.4951C7.65061 13.4951 5.80338 12.929 4.13672 11.7968C2.47005 10.6651 1.26172 9.14789 0.511719 7.24512C1.26172 5.34234 2.47005 3.82484 4.13672 2.69262C5.80338 1.56095 7.65061 0.995117 9.67838 0.995117C11.7062 0.995117 13.5534 1.56095 15.2201 2.69262C16.8867 3.82484 18.0951 5.34234 18.8451 7.24512C18.0951 9.14789 16.8867 10.6651 15.2201 11.7968C13.5534 12.929 11.7062 13.4951 9.67838 13.4951ZM9.67838 11.8285C11.2478 11.8285 12.6889 11.4151 14.0017 10.5885C15.3139 9.76234 16.3173 8.64789 17.0117 7.24512C16.3173 5.84234 15.3139 4.72762 14.0017 3.90095C12.6889 3.07484 11.2478 2.66178 9.67838 2.66178C8.10894 2.66178 6.66783 3.07484 5.35505 3.90095C4.04283 4.72762 3.0395 5.84234 2.34505 7.24512C3.0395 8.64789 4.04283 9.76234 5.35505 10.5885C6.66783 11.4151 8.10894 11.8285 9.67838 11.8285Z"
        fill="currentColor"
      />
    </svg>
  );
}

export { EyeLock, EyeShow };
