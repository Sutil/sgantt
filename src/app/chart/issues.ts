export default [
  {"key": "ATV-687", "id": 11739, "parentId": 0, "name": "OCTANTE - separar as minutas dentro do Ativus", "estimate": 28800},
  {"key": "ATV-639", "id": 11691, "parentId": 0, "name": "CONSULT - Ajustes", "estimate": 86400},
  {"key": "ATV-642", "id": 11694, "parentId": 11691, "name": "Ajustar os botões para que fiquem na mesma ordem do restante da plataforma", "estimate": 0},
  {"key": "ATV-645", "id": 11697, "parentId": 11691, "name": "Em contatos ajustar o nome da aba para CONSULTAS já que vai englobar todas as consultas realizadas no sistema (Certidões consult M.O P.E etc)", "estimate": 0},
  {"key": "ATV-646", "id": 11698, "parentId": 11691, "name": "Ao solicitar um Consult de uma pessoa que não está na base de contatos daquele ambiente deve ser exibido uma mensagem de que o contato foi salvo com sucesso.", "estimate": 0},
  {"key": "ATV-718", "id": 11772, "parentId": 11691, "name": "[Backend] Ao criar uma consulta retornar uma flag no reponse para identificar se contato foi inserido ou não", "estimate": 0},
  {"key": "ATV-799", "id": 11884, "parentId": 11691, "name": "[Frontend] Inserir Breve descrição do que é cada status (centro superior da tela)", "estimate": 0},
  {"key": "ATV-678", "id": 11730, "parentId": 0, "name": "Migrar Consulta de BigDataCorp para o Ativus", "estimate": 144000},
  {"key": "ATV-786", "id": 11871, "parentId": 0, "name": "Infrastructure | CORTEVA - Criar instância para homologação do SOLO", "estimate": 86400},
  {"key": "ATV-601", "id": 11653, "parentId": 0, "name": "Alterar nome dos databases para refletirem o subdomínio do cliente (Homologação)", "estimate": 14400},
  {"key": "ATV-605", "id": 11657, "parentId": 0, "name": "Refatorar settings.json do front end (Homologação)", "estimate": 230400},
  {"key": "ATV-603", "id": 11655, "parentId": 11657, "name": "Infrastructure | Modificar o padrão de URLs no Route 53 da AWS (Homologação)", "estimate": 28800},
  {"key": "ATV-604", "id": 11656, "parentId": 11657, "name": "Front end | Buscar o ProgramID da URL (Homologação)", "estimate": 28800},
  {"key": "ATV-606", "id": 11658, "parentId": 11657, "name": "Back end | Criar tabela para armezenar o settings.json (Homologação)", "estimate": 28800},
  {"key": "ATV-607", "id": 11659, "parentId": 11657, "name": "Backend | Criar os endpoints que retornam o campo settingsJson do banco (Homologação)", "estimate": 28800},
  {"key": "ATV-608", "id": 11660, "parentId": 11657, "name": "Front end | Fazer a chamada dos endpoints para recuperar o settings.json (Homologação)", "estimate": 57600},
  {"key": "ATV-609", "id": 11661, "parentId": 11657, "name": "Infrastructure | Refatorar o projeto deploys para fazer deploy em um único bucket (Homologação)", "estimate": 14400},
  {"key": "ATV-725", "id": 11779, "parentId": 0, "name": "Status Consult", "estimate": 0},
  {"key": "ATV-791", "id": 11876, "parentId": 0, "name": "Consult deveria validar se existe configuração para se criar uma consulta", "estimate": 14400},
  {"key": "ATV-630", "id": 11682, "parentId": 0, "name": "Criar uma solicitação de certidão", "estimate": 144000},
  {"key": "ATV-755", "id": 11839, "parentId": 11682, "name": "[Frontend] Criar estrutura da tela para comportar listagem + filtro + drawer", "estimate": 0},
  {"key": "ATV-783", "id": 11868, "parentId": 11682, "name": "[Frontend] Criar um componente de gestão da criação da certidão", "estimate": 0},
  {"key": "ATV-784", "id": 11869, "parentId": 11682, "name": "[Frontend] Criar estrutura (json) dos campos dinâmicos da certidão", "estimate": 0},
  {"key": "ATV-754", "id": 11838, "parentId": 11682, "name": "[Frontend] Criar uma solicitação de certidão", "estimate": 288000},
  {"key": "ATV-698", "id": 11750, "parentId": 11682, "name": "[Backend] Criar uma solicitação por matrícula", "estimate": 288000},
  {"key": "ATV-647", "id": 11699, "parentId": 11682, "name": "[Backend] Criar uma solicitação por livro3", "estimate": 288000},
  {"key": "ATV-806", "id": 11901, "parentId": 11682, "name": "[Backend] [Fix] Corrigir endpoint que busca estado/cidade para não duplicar", "estimate": 0},
  {"key": "ATV-824", "id": 11919, "parentId": 11682, "name": "[Backend] Criar solicitação por livro3 / Contanto não existente", "estimate": 0},
  {"key": "ATV-787", "id": 11872, "parentId": 0, "name": "Listar e filtrar solicitações de certidões", "estimate": 86400},
  {"key": "ATV-753", "id": 11837, "parentId": 11872, "name": "[Backend] Endpoint que permite listar e filtrar cartórios (ARISP) ", "estimate": 0},
  {"key": "ATV-757", "id": 11841, "parentId": 11872, "name": "[Backend] Endpoint para listar Solicitações de certidão", "estimate": 57600},
  {"key": "ATV-758", "id": 11842, "parentId": 11872, "name": "[Frontend] Listar solicitações de certidão", "estimate": 57600},
  {"key": "ATV-759", "id": 11843, "parentId": 11872, "name": "[Frontend] Filtro de solicitações de certidão", "estimate": 57600},
  {"key": "ATV-803", "id": 11898, "parentId": 11872, "name": "[FrontEnd] Filtragem pelos status", "estimate": 0},
  {"key": "ATV-789", "id": 11874, "parentId": 0, "name": "Visualizar solicitação + visualizar certidão", "estimate": 86400},
  {"key": "ATV-760", "id": 11844, "parentId": 11874, "name": "[Backende] Endpoint para retornar solicitação por id", "estimate": 0},
  {"key": "ATV-652", "id": 11704, "parentId": 11874, "name": "[Frontend] Visualização da solicitação de certidão", "estimate": 0},
  {"key": "ATV-788", "id": 11873, "parentId": 0, "name": "Histórico de solicitação de certidão", "estimate": 144000},
  {"key": "ATV-761", "id": 11845, "parentId": 11873, "name": "[Backend] Verificação de resposta de solicitações.", "estimate": 144000},
  {"key": "ATV-765", "id": 11850, "parentId": 11873, "name": "[Frontend] Responder exigência do cartório", "estimate": 0},
  {"key": "ATV-805", "id": 11900, "parentId": 0, "name": "Transferir tabela shedlock para o schema ativusglobal", "estimate": 86400},
  {"key": "ATV-819", "id": 11914, "parentId": 0, "name": "Octante/Andav - Ajustar a cor da label de acordo com as já existentes", "estimate": 14400},
  {"key": "ATV-802", "id": 11897, "parentId": 0, "name": "CONSULT - visualização de créditos - usuário program", "estimate": 28800},
  {"key": "ATV-820", "id": 11915, "parentId": 0, "name": "Octante/Andav - Ajustar label Cancelar e Confirmar ao adicionar Solicitações a Título/Termo", "estimate": 14400},
  {"key": "ATV-435", "id": 11475, "parentId": 0, "name": "Aba de Serviços - Integração p/ Certidões ", "estimate": 0},
  {"key": "ATV-223", "id": 11177, "parentId": 0, "name": "Aba de serviços - Consult", "estimate": 120},
  {"key": "ATV-695", "id": 11747, "parentId": 0, "name": "Relatórios de custas da Bunge", "estimate": 0},
  {"key": "ATV-67", "id": 11021, "parentId": 0, "name": "Inserir mais de um signatário de uma só vez", "estimate": 86400},
  {"key": "ATV-413", "id": 11389, "parentId": 0, "name": "Exportação de parceiros para excel", "estimate": 43200},
  {"key": "ATV-438", "id": 11478, "parentId": 0, "name": "A funcionalidade de exportar não está disponível na aba de parceiros apenas em relatórios. Replicar na aba de parceiros também. @601834a547a95400692bf62e decidir se vamos criar endpoint para isso ou se vamos usar o aggrid. @60105e8d47a9540069edf3f0 ", "estimate": 86400},
  {"key": "ATV-800", "id": 11895, "parentId": 0, "name": "[FrontEnd][Admin]Paginação do perfil de usuario não esta funcionando", "estimate": 14400},
  {"key": "ATV-808", "id": 11903, "parentId": 0, "name": "Multifornecedores | criar ambientes", "estimate": 14400},
  {"key": "ATV-809", "id": 11904, "parentId": 0, "name": "Multifornecedores | Configuração para usar Lastro customizado", "estimate": 14400},
  {"key": "ATV-828", "id": 11923, "parentId": 11904, "name": "[Backend] Script para criação de script de parâmetro customizado", "estimate": 14400},
  {"key": "ATV-810", "id": 11905, "parentId": 0, "name": "Multifornecedores | Criar uma solicitação", "estimate": 230400, "dependsId": 11904},
  {"key": "ATV-829", "id": 11924, "parentId": 11905, "name": "[Frontend][Partner] Novos tipos de anexos", "estimate": 86400},
  {"key": "ATV-830", "id": 11925, "parentId": 11905, "name": "[Backend] Permitir lista de produtores na solicitação + notificações por email", "estimate": 432000},
  {"key": "ATV-831", "id": 11926, "parentId": 11905, "name": "[Backend] Adicionar tipos de signatários", "estimate": 86400},
  {"key": "ATV-832", "id": 11927, "parentId": 11905, "name": "[Frontend][Partner] Criar uma solicitação", "estimate": 259200},
  {"key": "ATV-818", "id": 11913, "parentId": 0, "name": "Multifornecedores | minutas parametrizadas", "estimate": 86400},
  {"key": "ATV-834", "id": 11929, "parentId": 0, "name": "Cerimônias Scrum | Sprint 13", "estimate": 673200},
  {"key": "ATV-835", "id": 11930, "parentId": 11929, "name": "CLONE - Cerimônias Scrum | Sprint 13 - Sprint Planning 1", "estimate": 57600},
  {"key": "ATV-836", "id": 11931, "parentId": 11929, "name": "CLONE - Cerimônias Scrum | Sprint 13 - Daily", "estimate": 96000},
  {"key": "ATV-837", "id": 11932, "parentId": 11929, "name": "CLONE - Cerimônias Scrum | Sprint 13 - Sprint Review", "estimate": 57600},
  {"key": "ATV-838", "id": 11933, "parentId": 11929, "name": "CLONE - Cerimônias Scrum | Sprint 13 - Sprint Retrospective", "estimate": 14400},
  {"key": "ATV-840", "id": 11935, "parentId": 0, "name": "Provisionar novo cliente do ATIVUS v2 - FIAGRIL", "estimate": 14400}
  ];
