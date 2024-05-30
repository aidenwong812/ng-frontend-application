"use client"

import GoldDisplay from '@/components/Atoms/GoldDisplay'
import XpDisplay from '@/components/Atoms/XpDisplay'
import Image from 'next/image'
import styled from 'styled-components'
import avatar from 'public/assets/avatar.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 65px;
  padding-right: 55px;
  padding-top: 10px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid #212121;
  width: 56px;
  height: 56px;
`

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${avatar.src});
  border-radius: 9999px;
  border: 1px solid #B69E72;
`

const Header: React.FC = () => (
  <HeaderContainer>
    <LogoContainer>
      <Image src='/assets/1.svg' alt='Node Guardians' width={25} height={25} />
      <Image src='/assets/2.svg' alt='Node Guardians' width={25} height={25} />
      <Image src='/assets/3.svg' alt='Node Guardians' width={25} height={25} />
    </LogoContainer>
    <UserContainer>
      <GoldDisplay value="12 023" primary />
      <Image src='/assets/dot.svg' alt='Dot' width={8} height={8} />
      <XpDisplay value="132 586" primary />
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
    </UserContainer>
  </HeaderContainer>
)

export default Header