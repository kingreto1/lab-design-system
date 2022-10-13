import { EnvelopeSimple, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen items-center justify-center flex flex-col bg-gray-900 text-gray-100">
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-2'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='mt-8 gap-3 flex items-stretch flex-col w-full max-w-[330px]'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Endereço de e-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='*********' />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col gap-2 items-center mt-8'>
        <Text asChild size="sm">
          <a className='underline text-gray-400 hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
          

        <Text asChild size="sm">
          <a className='underline text-gray-400 hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
          
      </footer>
    </div>
  )
};
