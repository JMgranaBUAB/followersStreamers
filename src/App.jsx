import { useState } from 'react'
import StreamerCard from './components/StreamerCard'
import './index.css'

function App() {
  return (
    <div className="bodyIndex">
      <h1 className="h1Titulo">TOP Streamers</h1>

      <div className="iframeFollowers">
        {/* Manual list as requested to avoid JSON/map issues */}
        <StreamerCard id="ibaillanos" />
        <StreamerCard id="thegrefg" />
        <StreamerCard id="rubius" />
        <StreamerCard id="elxokas" />
        <StreamerCard id="auronplay" />
        <StreamerCard id="iamcristinini" />
        <StreamerCard id="zyrpesland" />
        <StreamerCard id="illojuan" />
        <StreamerCard id="knekro_" />
        <StreamerCard id="lamejorclaseyt" />
        <StreamerCard id="puertaracing" />
        <StreamerCard id="alexbyonce" />
        <StreamerCard id="jmgranabuab" />
      </div>
    </div>
  )
}

export default App
