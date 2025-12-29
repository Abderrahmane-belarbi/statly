interface LoaderParams {
  size?: number;
  color?: 'white';
}

export default function Loader({ size, color}: LoaderParams) {
  return (
    <div className={`w-[18px] h-[18px] ${size ? `w-[${size}px] h-[${size}px]` : ''} loader-spinner border-2 border-solid 
       rounded-full transition-colors
      ${color === 'white' ? 'dark:border-y-gray-100 dark:border-l-gray-100 border-y-gray-400 border-l-gray-400' : 'dark:border-y-purple-500 dark:border-l-purple-500 border-y-purple-600 border-l-purple-600'} 
      `}>
    </div>
  );
}