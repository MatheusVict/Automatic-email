<div align="center">
 <h1>Automatic-email<h1>
</div>


![iniciar](https://user-images.githubusercontent.com/103688000/174096322-3575111d-f561-48fc-8f28-b8ff4224fe59.png)<br>
<b>Primeiramente inicie no terminal</b><br><br>
![json](https://user-images.githubusercontent.com/103688000/174096661-64f7bb46-a0d2-46f9-beac-245c2e37633e.png)<br>
<b>E ele te retornará um json</b><br><br>
![mailer](https://user-images.githubusercontent.com/103688000/174096934-f7a311cc-9a17-48f3-89ed-b2b737f2deee.png)<br>
<b>Logo após ainda no terminal instale os pacotes necessários</b><br><br>
![chame](https://user-images.githubusercontent.com/103688000/174097331-847f5db8-f8f6-467d-8b05-aed3403ed25c.png)<br>
<b>Logo após chame o armazenando em uma constante</b><br><br>
![configure](https://user-images.githubusercontent.com/103688000/174097725-9c395f35-6b7d-4ab9-bbda-e1c7ca44f4fd.png)<br>
<b>Chame a função creatTransport e coloque nela o host(que você irá pesquisar no google pelo smtp da organização do email)<br>
Depois a porta que estará na pesquisa e coloque o secure, true para a porta 465(Gmail) e false para outras<br>
Depois auth e você irá colocar o email remetente no user e no pass a senha desse email caso esteja usando hotmail<br>
E se for pelo Gmail, configure uma senha de app na sua conta google e insira.</b><br><br>
![destinatario](https://user-images.githubusercontent.com/103688000/174100323-704b306c-fad4-4304-afa7-f2dd84021bea.png)<br>
<b>Chame a função sendMail e coloque o nome do rementente e o email remetente coloca em<><br>
o to é para qual email vai enviar, o subject é o assunto do email e o html a estrutura dele</b><br><br>
![capturar](https://user-images.githubusercontent.com/103688000/174101124-6de42190-25a4-4735-94c2-c8edf42ab238.png)<br>
<b>Capture no terminal se foi enviado ou não</b><br><br>
![executar](https://user-images.githubusercontent.com/103688000/174101355-2d56f650-a379-41a3-86e8-02143f98d815.png)<br><br>
<b>Por fim para executar basta colocar no terminal node e o nome do arquivo.js</b><br>


##
An application for automatic sending of emails

To use it, you first need to decide whether to use hotmail or gmail.


If you want hotmail, just use your email in the user and the password of the email you want to send, right after, inform the recipient and the sender, the html formatting or just the text and execute

If you want to send it by email, you need to access your google account settings and use the app password generator parameter, if it doesn't appear try activating two-step verification,
and use the generated password instead of your password in the code

##

<div align="center">
  <h1>Tecnologias usadas: </h1><br>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white">
</div>
