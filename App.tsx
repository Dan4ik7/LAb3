import React, { useState } from 'react';
import { Layout, Menu, Card } from 'antd';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState<{
    title: string
    content: string
  }[]>([]);
  const [personalInfo, setPersonalInfo] = useState({
    cardname: '',
    name: '',
    location: '',
    interests: '',
    email: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };


  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleSavePersonalInfo = () => {
    setCards([]);
    setInputValue('');
    const infoCard = {
      title: 'Personal Information',
      content: `Card name: ${personalInfo.cardname}\n Name: ${personalInfo.name}\nLocation: ${personalInfo.location}\nInterests: ${personalInfo.interests}\nEmail: ${personalInfo.email}`,
    };
    setCards([...cards, infoCard]);
    setPersonalInfo({cardname: '', name: '', location: '', interests: '', email: '' });
  };

  const handleClick = () => {
    const newCard = { title: `Card ${cards.length + 1}`, content: inputValue };
    setCards([...cards, newCard]);
    setInputValue('');
  };

  return (
    <Layout>
      <Layout.Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About Me</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
          <Menu.Item key="4">Cards</Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <h1>Welcome to my website!</h1>
          <p>Here you can learn more about me and my interests.</p>
          <h2>About Me</h2>
          <form>
          <label>
              Card Name:
              <input type="text" name="cardname" value={personalInfo.cardname} onChange={handlePersonalInfoChange} style={{
                marginLeft: '10px',
                marginBottom: '10px'
              }}/>
            </label><br />
            <label>
              Name:
              <input type="text" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} style={{
                marginLeft: '43px',
                marginBottom: '10px'
              }}/>
            </label>
            <br />
            <label>
              Location:
              <input type="text" name="location" value={personalInfo.location} onChange={handlePersonalInfoChange}  style={{
                marginLeft: '28px',
                marginBottom: '10px'
              }}/>
            </label>
            <br />
            <label>
              Interests:
              <input type="text" name="interests" value={personalInfo.interests} onChange={handlePersonalInfoChange} style={{
                marginLeft: '30px',
                marginBottom: '10px'
              }}/>
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="email" value={personalInfo.email} onChange={handlePersonalInfoChange}  style={{
                marginLeft: '50px',
                marginBottom: '10px'
              }}/>
            </label>
            <br />
            <button type="button" onClick={handleSavePersonalInfo}>
              Save Personal Information
            </button>
          </form>
          <h2>My Cards</h2>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleClick}>Add Card</button>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
  {cards.map((card, index) => (
    <Card key={index} title={card.title} style={{ width: 300, margin: '0 30px' }}>
      <p>{card.content}</p>
    </Card>
  ))}
</div>
      </div>
    </Layout.Content>
  </Layout>
);
  }
export default App;