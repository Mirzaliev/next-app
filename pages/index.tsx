import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button, Htag, P} from "../components";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <div>
        <Button mode='primary' className='sdfsdfsdf' arrow='right'>primary</Button>
        <Button mode='ghost' arrow='down'>ghost</Button>
        <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos ea error eveniet excepturi exercitationem facilis nulla omnis repellat voluptate? Autem dignissimos dolorem doloribus libero natus possimus quo tempore voluptates.</P>
    </div>
  )
}


