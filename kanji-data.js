const LEVELS = {
  N5: [
    {
      w: '一', r: ['ichi', 'hito', 'hitotsu'], h: ['いち', 'ひと', 'ひとつ'], pt: 'um, primeiro',
      ex: ['一番 (ichiban) – o número um, o melhor', '一人 (hitori) – uma pessoa sozinha', '一月 (ichigatsu) – janeiro']
    },
    {
      w: '二', r: ['ni', 'futa', 'futatsu'], h: ['に', 'ふた', 'ふたつ'], pt: 'dois',
      ex: ['二番 (niban) – segundo lugar', '二人 (futari) – duas pessoas', '二月 (nigatsu) – fevereiro']
    },
    {
      w: '三', r: ['san', 'mi', 'mittsu'], h: ['さん', 'み', 'みっつ'], pt: 'três',
      ex: ['三角 (sankaku) – triângulo', '三人 (sannin) – três pessoas', '三月 (sangatsu) – março']
    },
    {
      w: '四', r: ['shi', 'yon', 'yottsu'], h: ['し', 'よん', 'よっつ'], pt: 'quatro',
      ex: ['四月 (shigatsu) – abril', '四人 (yonin) – quatro pessoas', '四季 (shiki) – quatro estações']
    },
    {
      w: '五', r: ['go', 'itsutsu'], h: ['ご', 'いつつ'], pt: 'cinco',
      ex: ['五月 (gogatsu) – maio', '五人 (gonin) – cinco pessoas', '五感 (gokan) – os cinco sentidos']
    },
    {
      w: '六', r: ['roku', 'muttsu'], h: ['ろく', 'むっつ'], pt: 'seis',
      ex: ['六月 (rokugatsu) – junho', '六人 (rokunin) – seis pessoas', '六角 (rokkaku) – hexágono']
    },
    {
      w: '七', r: ['shichi', 'nana', 'nanatsu'], h: ['しち', 'なな', 'ななつ'], pt: 'sete',
      ex: ['七月 (shichigatsu) – julho', '七人 (shichinin) – sete pessoas', '七夕 (tanabata) – festival das estrelas']
    },
    {
      w: '八', r: ['hachi', 'yattsu'], h: ['はち', 'やっつ'], pt: 'oito',
      ex: ['八月 (hachigatsu) – agosto', '八百屋 (yaoya) – verdureiro', '八方 (happou) – todas as direções']
    },
    {
      w: '九', r: ['ku', 'kyuu', 'kokonotsu'], h: ['く', 'きゅう', 'ここのつ'], pt: 'nove',
      ex: ['九月 (kugatsu) – setembro', '九人 (kyuunin) – nove pessoas', '九州 (kyuushuu) – Kyushu']
    },
    {
      w: '十', r: ['juu', 'tou'], h: ['じゅう', 'とお'], pt: 'dez',
      ex: ['十月 (juugatsu) – outubro', '十分 (juubun) – suficiente', '十字 (juuji) – cruz']
    },
    {
      w: '百', r: ['hyaku'], h: ['ひゃく'], pt: 'cem',
      ex: ['百円 (hyakuen) – cem ienes', '百科事典 – enciclopédia', '三百 (sanbyaku) – trezentos']
    },
    {
      w: '千', r: ['sen'], h: ['せん'], pt: 'mil',
      ex: ['千円 (senen) – mil ienes', '千年 (sennen) – mil anos', '千代 (chiyo) – mil gerações']
    },
    {
      w: '万', r: ['man', 'ban'], h: ['まん', 'ばん'], pt: 'dez mil',
      ex: ['一万円 (ichimanen) – dez mil ienes', '万年筆 (mannenhitsu) – caneta-tinteiro', '万国 (bankoku) – todas as nações']
    },
    {
      w: '円', r: ['en', 'maru'], h: ['えん', 'まる'], pt: 'iene; círculo',
      ex: ['百円 (hyakuen) – cem ienes', '円高 (endaka) – iene forte', '円形 (enkei) – formato circular']
    },
    {
      w: '年', r: ['nen', 'toshi'], h: ['ねん', 'とし'], pt: 'ano',
      ex: ['今年 (kotoshi) – este ano', '来年 (rainen) – ano que vem', '年齢 (nenrei) – idade']
    },
    {
      w: '月', r: ['gatsu', 'tsuki', 'getsu'], h: ['がつ', 'つき', 'げつ'], pt: 'mês; lua',
      ex: ['一月 (ichigatsu) – janeiro', '月曜日 – segunda-feira', '月光 (gekkou) – luar']
    },
    {
      w: '日', r: ['nichi', 'hi', 'ka'], h: ['にち', 'ひ', 'か'], pt: 'dia; sol',
      ex: ['日曜日 (nichiyoubi) – domingo', '毎日 (mainichi) – todo dia', '日光 (nikkou) – luz do sol']
    },
    {
      w: '時', r: ['ji', 'toki'], h: ['じ', 'とき'], pt: 'hora, momento',
      ex: ['何時 (nanji) – que horas', '時間 (jikan) – tempo', '時々 (tokidoki) – às vezes']
    },
    {
      w: '分', r: ['fun', 'pun', 'bun'], h: ['ふん', 'ぷん', 'ぶん'], pt: 'minuto; parte',
      ex: ['五分 (gofun) – cinco minutos', '自分 (jibun) – eu mesmo', '半分 (hanbun) – metade']
    },
    {
      w: '上', r: ['ue', 'kami', 'jou'], h: ['うえ', 'かみ', 'じょう'], pt: 'cima, superior',
      ex: ['机の上 – em cima da mesa', '上手 (jouzu) – habilidoso', '屋上 (okujou) – terraço']
    },
    {
      w: '下', r: ['shita', 'ka', 'ge'], h: ['した', 'か', 'げ'], pt: 'baixo, inferior',
      ex: ['下に (shita ni) – embaixo', '地下 (chika) – subsolo', '下手 (heta) – sem habilidade']
    },
    {
      w: '中', r: ['naka', 'chuu'], h: ['なか', 'ちゅう'], pt: 'dentro, meio',
      ex: ['中に入る – entrar dentro', '中学校 (chuugakkou) – ensino médio', '中心 (chuushin) – centro']
    },
    {
      w: '大', r: ['ookii', 'dai', 'tai'], h: ['おおきい', 'だい', 'たい'], pt: 'grande',
      ex: ['大きい (ookii) – grande', '大学 (daigaku) – universidade', '大切 (taisetsu) – importante']
    },
    {
      w: '小', r: ['chiisai', 'shou'], h: ['ちいさい', 'しょう'], pt: 'pequeno',
      ex: ['小さい (chiisai) – pequeno', '小学校 (shougakkou) – escola primária', '小説 (shousetsu) – romance']
    },
    {
      w: '山', r: ['yama', 'san'], h: ['やま', 'さん'], pt: 'montanha',
      ex: ['富士山 (fujisan) – Monte Fuji', '山登り (yamanobori) – alpinismo', '火山 (kazan) – vulcão']
    },
    {
      w: '川', r: ['kawa', 'sen'], h: ['かわ', 'せん'], pt: 'rio',
      ex: ['川を渡る – atravessar o rio', '小川 (ogawa) – riacho', '河川 (kasen) – rios']
    },
    {
      w: '海', r: ['umi', 'kai'], h: ['うみ', 'かい'], pt: 'mar, oceano',
      ex: ['海に行く – ir ao mar', '海外 (kaigai) – exterior', '海岸 (kaigan) – litoral']
    },
    {
      w: '空', r: ['sora', 'kuu'], h: ['そら', 'くう'], pt: 'céu; vazio',
      ex: ['空が青い – o céu é azul', '空港 (kuukou) – aeroporto', '空気 (kuuki) – ar']
    },
    {
      w: '火', r: ['hi', 'ka'], h: ['ひ', 'か'], pt: 'fogo',
      ex: ['火事 (kaji) – incêndio', '花火 (hanabi) – fogos de artifício', '火曜日 – terça-feira']
    },
    {
      w: '水', r: ['mizu', 'sui'], h: ['みず', 'すい'], pt: 'água',
      ex: ['水を飲む – beber água', '水曜日 – quarta-feira', '水泳 (suiei) – natação']
    },
    {
      w: '木', r: ['ki', 'moku', 'boku'], h: ['き', 'もく', 'ぼく'], pt: 'árvore, madeira',
      ex: ['木の葉 (ki no ha) – folha de árvore', '木曜日 – quinta-feira', '木材 (mokuzai) – madeira']
    },
    {
      w: '金', r: ['kin', 'kane'], h: ['きん', 'かね'], pt: 'ouro; dinheiro',
      ex: ['お金 (okane) – dinheiro', '金曜日 – sexta-feira', '金属 (kinzoku) – metal']
    },
    {
      w: '土', r: ['tsuchi', 'do'], h: ['つち', 'ど'], pt: 'terra, solo',
      ex: ['土曜日 (doyoubi) – sábado', '土地 (tochi) – terreno', '土台 (dodai) – fundação']
    },
    {
      w: '人', r: ['hito', 'jin', 'nin'], h: ['ひと', 'じん', 'にん'], pt: 'pessoa, ser humano',
      ex: ['人々 (hitobito) – pessoas', '外国人 (gaikokujin) – estrangeiro', '人気 (ninki) – popularidade']
    },
    {
      w: '口', r: ['kuchi', 'kou'], h: ['くち', 'こう'], pt: 'boca; entrada',
      ex: ['口を開ける – abrir a boca', '入口 (iriguchi) – entrada', '人口 (jinkou) – população']
    },
    {
      w: '手', r: ['te', 'shu'], h: ['て', 'しゅ'], pt: 'mão',
      ex: ['手を洗う – lavar as mãos', '上手 (jouzu) – habilidoso', '手紙 (tegami) – carta']
    },
    {
      w: '目', r: ['me', 'moku'], h: ['め', 'もく'], pt: 'olho',
      ex: ['目が覚める – acordar', '目的 (mokuteki) – objetivo', '注目 (chuumoku) – atenção']
    },
    {
      w: '耳', r: ['mimi', 'ji'], h: ['みみ', 'じ'], pt: 'ouvido',
      ex: ['耳が痛い – a orelha dói', '耳鳴り (miminari) – zumbido', '耳鼻科 (jibika) – otorrino']
    },
    {
      w: '心', r: ['kokoro', 'shin'], h: ['こころ', 'しん'], pt: 'coração, mente, alma',
      ex: ['心が広い – generoso', '心配 (shinpai) – preocupação', '中心 (chuushin) – centro']
    },
    {
      w: '気', r: ['ki', 'ge'], h: ['き', 'げ'], pt: 'energia, espírito; atmosfera',
      ex: ['気をつけて – tome cuidado', '天気 (tenki) – clima', '人気 (ninki) – popularidade']
    },
    {
      w: '男', r: ['otoko', 'dan', 'nan'], h: ['おとこ', 'だん', 'なん'], pt: 'homem',
      ex: ['男の子 – menino', '男性 (dansei) – homem (formal)', '長男 (chounan) – filho mais velho']
    },
    {
      w: '女', r: ['onna', 'jo'], h: ['おんな', 'じょ'], pt: 'mulher',
      ex: ['女の子 – menina', '女性 (josei) – mulher (formal)', '女王 (joou) – rainha']
    },
    {
      w: '子', r: ['ko', 'shi'], h: ['こ', 'し'], pt: 'criança, filho/a',
      ex: ['子供 (kodomo) – criança', '男の子 – menino', '子育て (kosodate) – criação de filhos']
    },
    {
      w: '本', r: ['hon', 'moto'], h: ['ほん', 'もと'], pt: 'livro; origem; verdadeiro',
      ex: ['本を読む – ler um livro', '日本 (nihon) – Japão', '本当 (hontou) – de verdade']
    },
    {
      w: '語', r: ['go', 'kata'], h: ['ご', 'かた'], pt: 'idioma, palavra',
      ex: ['日本語 (nihongo) – japonês', '英語 (eigo) – inglês', '物語 (monogatari) – história']
    },
    {
      w: '国', r: ['kuni', 'koku'], h: ['くに', 'こく'], pt: 'país, nação',
      ex: ['外国 (gaikoku) – país estrangeiro', '国際 (kokusai) – internacional', '全国 (zenkoku) – todo o país']
    },
    {
      w: '学', r: ['gaku', 'mana'], h: ['がく', 'まな'], pt: 'estudar, aprender; ciência',
      ex: ['大学 (daigaku) – universidade', '学校 (gakkou) – escola', '学ぶ (manabu) – aprender']
    },
    {
      w: '生', r: ['sei', 'shou', 'nama'], h: ['せい', 'しょう', 'なま'], pt: 'vida; nascer; cru',
      ex: ['先生 (sensei) – professor', '生活 (seikatsu) – vida cotidiana', '生まれる (umareru) – nascer']
    },
    {
      w: '花', r: ['hana', 'ka'], h: ['はな', 'か'], pt: 'flor',
      ex: ['花見 (hanami) – apreciação das flores', '花火 (hanabi) – fogos de artifício', '花束 (hanataba) – buquê']
    },
    {
      w: '車', r: ['kuruma', 'sha'], h: ['くるま', 'しゃ'], pt: 'carro, veículo',
      ex: ['電車 (densha) – trem', '自動車 (jidousha) – automóvel', '駐車場 – estacionamento']
    },
    { w: '友', r: ['tomo', 'yuu'], h: ['とも', 'ゆう'], pt: 'amigo',
      ex: ['友達 (tomodachi) – amigo', '友人 (yuujin) – amigo (formal)', '親友 (shinyuu) – melhor amigo'] },
    { w: '先', r: ['saki', 'sen'], h: ['さき', 'せん'], pt: 'antes; ponta; futuro',
      ex: ['先生 (sensei) – professor', '先月 (sengetsu) – mês passado', '先に行く – ir na frente'] },
    { w: '休', r: ['yasumi', 'kyuu'], h: ['やすみ', 'きゅう'], pt: 'descanso; folga',
      ex: ['休みの日 – dia de folga', '休憩 (kyuukei) – intervalo', '夏休み (natsuyasumi) – férias de verão'] },
    { w: '外', r: ['soto', 'gai', 'ge'], h: ['そと', 'がい', 'げ'], pt: 'fora, exterior',
      ex: ['外に出る – sair', '海外 (kaigai) – exterior', '外国人 (gaikokujin) – estrangeiro'] },
    { w: '午', r: ['go'], h: ['ご'], pt: 'meio-dia',
      ex: ['午前 (gozen) – manhã, AM', '午後 (gogo) – tarde, PM', '正午 (shougo) – meio-dia'] },
    { w: '校', r: ['kou'], h: ['こう'], pt: 'escola',
      ex: ['学校 (gakkou) – escola', '高校 (koukou) – ensino médio', '校長 (kouchou) – diretor'] },
    { w: '名', r: ['na', 'mei', 'myou'], h: ['な', 'めい', 'みょう'], pt: 'nome, famoso',
      ex: ['名前 (namae) – nome', '有名 (yuumei) – famoso', '名人 (meijin) – mestre'] },
    { w: '間', r: ['aida', 'kan', 'ma'], h: ['あいだ', 'かん', 'ま'], pt: 'intervalo; entre',
      ex: ['時間 (jikan) – tempo', '人間 (ningen) – ser humano', '間に合う (maniau) – chegar a tempo'] },
    { w: '長', r: ['nagai', 'chou'], h: ['ながい', 'ちょう'], pt: 'longo; chefe',
      ex: ['長い道 – caminho longo', '社長 (shachou) – presidente', '校長 (kouchou) – diretor'] },
    { w: '母', r: ['haha', 'bo'], h: ['はは', 'ぼ'], pt: 'mãe',
      ex: ['お母さん (okaasan) – mãe', '母国 (bokoku) – pátria', '母語 (bogo) – língua materna'] },
    { w: '父', r: ['chichi', 'fu'], h: ['ちち', 'ふ'], pt: 'pai',
      ex: ['お父さん (otousan) – pai', '父母 (fubo) – pais', '父親 (chichioya) – pai'] },
    { w: '白', r: ['shiro', 'haku'], h: ['しろ', 'はく'], pt: 'branco',
      ex: ['白い (shiroi) – branco', '白紙 (hakushi) – papel em branco', '白黒 (shirokuro) – preto e branco'] },
    { w: '雨', r: ['ame', 'u'], h: ['あめ', 'う'], pt: 'chuva',
      ex: ['雨が降る – chover', '大雨 (ooame) – chuva forte', '梅雨 (tsuyu) – estação das chuvas'] },
    { w: '高', r: ['takai', 'kou'], h: ['たかい', 'こう'], pt: 'alto; caro',
      ex: ['高い山 – montanha alta', '高校 (koukou) – ensino médio', '最高 (saikou) – o melhor'] },
    { w: '天', r: ['ten', 'ame'], h: ['てん', 'あめ'], pt: 'céu; paraíso',
      ex: ['天気 (tenki) – clima', '天国 (tengoku) – paraíso', '天才 (tensai) – gênio'] },
    { w: '食', r: ['shoku', 'ta'], h: ['しょく', 'た'], pt: 'comer; comida',
      ex: ['食事 (shokuji) – refeição', '食べ物 (tabemono) – comida', '食堂 (shokudou) – refeitório'] },
    { w: '足', r: ['ashi', 'soku'], h: ['あし', 'そく'], pt: 'pé; perna; suficiente',
      ex: ['足が痛い – o pé dói', '不足 (fusoku) – insuficiente', '遠足 (ensoku) – excursão'] },
    { w: '体', r: ['karada', 'tai'], h: ['からだ', 'たい'], pt: 'corpo',
      ex: ['体が大きい – corpo grande', '体育 (taiiku) – educação física', '体温 (taion) – temperatura corporal'] },
    { w: '入', r: ['hairu', 'nyuu'], h: ['はいる', 'にゅう'], pt: 'entrar',
      ex: ['入口 (iriguchi) – entrada', '入学 (nyuugaku) – matrícula', '記入 (kinyuu) – preencher'] },
    { w: '出', r: ['deru', 'shutsu'], h: ['でる', 'しゅつ'], pt: 'sair; colocar para fora',
      ex: ['出口 (deguchi) – saída', '出発 (shuppatsu) – partida', '提出 (teishutsu) – entrega'] },
    { w: '来', r: ['kuru', 'rai'], h: ['くる', 'らい'], pt: 'vir; próximo',
      ex: ['来年 (rainen) – ano que vem', '来月 (raigetsu) – mês que vem', '将来 (shourai) – futuro'] },
    { w: '見', r: ['miru', 'ken'], h: ['みる', 'けん'], pt: 'ver, olhar',
      ex: ['花見 (hanami) – ver as flores', '意見 (iken) – opinião', '見学 (kengaku) – visita'] },
    { w: '行', r: ['iku', 'kou', 'gyou'], h: ['いく', 'こう', 'ぎょう'], pt: 'ir; linha',
      ex: ['旅行 (ryokou) – viagem', '銀行 (ginkou) – banco', '行動 (koudou) – ação'] },
    { w: '聞', r: ['kiku', 'bun'], h: ['きく', 'ぶん'], pt: 'ouvir; perguntar',
      ex: ['新聞 (shinbun) – jornal', '聞く (kiku) – ouvir', '見聞 (kenbun) – experiência'] },
    { w: '読', r: ['yomu', 'doku'], h: ['よむ', 'どく'], pt: 'ler',
      ex: ['読書 (dokusho) – leitura', '読み方 (yomikata) – modo de leitura', '音読 (ondoku) – leitura em voz alta'] },
    { w: '書', r: ['kaku', 'sho'], h: ['かく', 'しょ'], pt: 'escrever',
      ex: ['辞書 (jisho) – dicionário', '書類 (shorui) – documentos', '図書 (tosho) – livros'] },
    { w: '話', r: ['hanashi', 'wa'], h: ['はなし', 'わ'], pt: 'conversa; história',
      ex: ['電話 (denwa) – telefone', '会話 (kaiwa) – conversação', '話題 (wadai) – assunto'] },
  ],

  N4: [
    {
      w: '会', r: ['kai', 'e', 'au'], h: ['かい', 'え', 'あう'], pt: 'reunião; encontrar',
      ex: ['会議 (kaigi) – reunião', '社会 (shakai) – sociedade', '出会い (deai) – encontro']
    },
    {
      w: '社', r: ['sha'], h: ['しゃ'], pt: 'empresa; santuário',
      ex: ['会社 (kaisha) – empresa', '神社 (jinja) – santuário xintoísta', '社長 (shachou) – presidente']
    },
    {
      w: '電', r: ['den'], h: ['でん'], pt: 'eletricidade, relâmpago',
      ex: ['電車 (densha) – trem', '電話 (denwa) – telefone', '電気 (denki) – eletricidade']
    },
    {
      w: '話す', r: ['hanasu'], h: ['はなす'], pt: 'falar, conversar',
      ex: ['友達と話す – conversar com amigo', '話し合い (hanashiai) – discussão', '電話で話す – falar ao telefone']
    },
    {
      w: '食べる', r: ['taberu'], h: ['たべる'], pt: 'comer',
      ex: ['朝ごはんを食べる – comer o café da manhã', '食べ物 (tabemono) – comida', '食べ放題 (tabehodai) – rodízio']
    },
    {
      w: '飲む', r: ['nomu'], h: ['のむ'], pt: 'beber',
      ex: ['水を飲む – beber água', '飲み物 (nomimono) – bebida', '飲み会 (nomikai) – happy hour']
    },
    {
      w: '見る', r: ['miru'], h: ['みる'], pt: 'ver, assistir',
      ex: ['映画を見る – assistir a um filme', '見学 (kengaku) – visita de estudos', '意見 (iken) – opinião']
    },
    {
      w: '来る', r: ['kuru'], h: ['くる'], pt: 'vir',
      ex: ['友達が来る – o amigo vem', '来年 (rainen) – ano que vem', '将来 (shourai) – futuro']
    },
    {
      w: '行く', r: ['iku'], h: ['いく'], pt: 'ir',
      ex: ['学校に行く – ir à escola', '旅行 (ryokou) – viagem', '行動 (koudou) – comportamento']
    },
    {
      w: '帰る', r: ['kaeru'], h: ['かえる'], pt: 'voltar para casa',
      ex: ['家に帰る – voltar para casa', 'お帰り (okaeri) – bem-vindo de volta', '帰国 (kikoku) – retorno ao país']
    },
    {
      w: '入る', r: ['hairu', 'iru'], h: ['はいる', 'いる'], pt: 'entrar',
      ex: ['部屋に入る – entrar no quarto', '入口 (iriguchi) – entrada', '入学 (nyuugaku) – ingresso na escola']
    },
    {
      w: '出る', r: ['deru'], h: ['でる'], pt: 'sair, emitir',
      ex: ['家を出る – sair de casa', '出口 (deguchi) – saída', '出発 (shuppatsu) – partida']
    },
    {
      w: '読む', r: ['yomu'], h: ['よむ'], pt: 'ler',
      ex: ['本を読む – ler um livro', '読書 (dokusho) – leitura', '読み方 (yomikata) – modo de leitura']
    },
    {
      w: '書く', r: ['kaku'], h: ['かく'], pt: 'escrever',
      ex: ['手紙を書く – escrever uma carta', '図書館 (toshokan) – biblioteca', '書類 (shorui) – documentos']
    },
    {
      w: '聞く', r: ['kiku'], h: ['きく'], pt: 'ouvir; perguntar',
      ex: ['音楽を聞く – ouvir música', '新聞 (shinbun) – jornal', '聞き取り (kikitori) – compreensão auditiva']
    },
    {
      w: '言う', r: ['iu', 'yuu'], h: ['いう', 'ゆう'], pt: 'dizer, falar',
      ex: ['何と言う – como se diz', '言葉 (kotoba) – palavra', '言語 (gengo) – idioma']
    },
    {
      w: '買う', r: ['kau'], h: ['かう'], pt: 'comprar',
      ex: ['買い物をする – fazer compras', '売買 (baibai) – compra e venda', 'お買い得 – promoção']
    },
    {
      w: '休む', r: ['yasumu'], h: ['やすむ'], pt: 'descansar; faltar',
      ex: ['仕事を休む – faltar ao trabalho', '休日 (kyuujitsu) – dia de folga', '夏休み – férias de verão']
    },
    {
      w: '立つ', r: ['tatsu'], h: ['たつ'], pt: 'ficar de pé; estabelecer',
      ex: ['立って待つ – esperar de pé', '国立 (kokuritsu) – nacional', '立場 (tachiba) – ponto de vista']
    },
    {
      w: '新しい', r: ['atarashii'], h: ['あたらしい'], pt: 'novo',
      ex: ['新しい家 – casa nova', '新聞 (shinbun) – jornal', '新幹線 (shinkansen) – trem-bala']
    },
    {
      w: '古い', r: ['furui'], h: ['ふるい'], pt: 'velho, antigo',
      ex: ['古い建物 – prédio antigo', '古典 (koten) – clássico', '中古 (chuuko) – usado, seminovo']
    },
    {
      w: '多い', r: ['ooi'], h: ['おおい'], pt: 'muito, abundante',
      ex: ['人が多い – tem muita gente', '多分 (tabun) – talvez', '多数 (tasuu) – maioria']
    },
    {
      w: '少ない', r: ['sukunai'], h: ['すくない'], pt: 'pouco, escasso',
      ex: ['時間が少ない – pouco tempo', '少し (sukoshi) – um pouco', '少年 (shounen) – garoto, jovem']
    },
    {
      w: '早い', r: ['hayai'], h: ['はやい'], pt: 'cedo; rápido',
      ex: ['早い電車 – trem rápido', '早起き (hayaoki) – acordar cedo', '早速 (sassoku) – imediatamente']
    },
    {
      w: '遅い', r: ['osoi'], h: ['おそい'], pt: 'tarde; lento',
      ex: ['電車が遅い – o trem está atrasado', '遅刻 (chikoku) – atraso', '遅延 (chien) – demora']
    },
    {
      w: '近い', r: ['chikai'], h: ['ちかい'], pt: 'perto, próximo',
      ex: ['駅が近い – a estação é perto', '近所 (kinjo) – vizinhança', '最近 (saikin) – recentemente']
    },
    {
      w: '遠い', r: ['tooi'], h: ['とおい'], pt: 'longe, distante',
      ex: ['遠い国 – país distante', '遠足 (ensoku) – excursão', '遠慮 (enryo) – contenção, modéstia']
    },
    {
      w: '右', r: ['migi'], h: ['みぎ'], pt: 'direita',
      ex: ['右に曲がる – virar à direita', '右手 (migite) – mão direita', '右側 (migigawa) – lado direito']
    },
    {
      w: '左', r: ['hidari'], h: ['ひだり'], pt: 'esquerda',
      ex: ['左に曲がる – virar à esquerda', '左手 (hidarite) – mão esquerda', '左側 (hidarigawa) – lado esquerdo']
    },
    {
      w: '北', r: ['kita', 'hoku'], h: ['きた', 'ほく'], pt: 'norte',
      ex: ['北口 (kitaguchi) – saída norte', '北海道 (hokkaidou) – Hokkaido', '北極 (hokkyoku) – polo norte']
    },
    {
      w: '南', r: ['minami', 'nan'], h: ['みなみ', 'なん'], pt: 'sul',
      ex: ['南口 (minamiguchi) – saída sul', '南米 (nanbei) – América do Sul', '南極 (nankyoku) – polo sul']
    },
    {
      w: '東', r: ['higashi', 'tou'], h: ['ひがし', 'とう'], pt: 'leste, oriente',
      ex: ['東口 (higashiguchi) – saída leste', '東京 (toukyou) – Tóquio', '東南アジア – Sudeste Asiático']
    },
    {
      w: '西', r: ['nishi', 'sei'], h: ['にし', 'せい'], pt: 'oeste, ocidente',
      ex: ['西口 (nishiguchi) – saída oeste', '関西 (kansai) – região Kansai', '西洋 (seiyou) – Ocidente']
    },
    {
      w: '前', r: ['mae', 'zen'], h: ['まえ', 'ぜん'], pt: 'frente, antes',
      ex: ['前に進む – avançar', '名前 (namae) – nome', '前回 (zenkai) – última vez']
    },
    {
      w: '後ろ', r: ['ushiro'], h: ['うしろ'], pt: 'atrás, verso',
      ex: ['後ろを見る – olhar para trás', '後ろ姿 – visão de costas', '真後ろ – bem atrás']
    },
    {
      w: '今', r: ['ima', 'kon', 'kin'], h: ['いま', 'こん', 'きん'], pt: 'agora, presente',
      ex: ['今日 (kyou) – hoje', '今年 (kotoshi) – este ano', '今月 (kongetsu) – este mês']
    },
    {
      w: '毎', r: ['mai'], h: ['まい'], pt: 'cada, todo',
      ex: ['毎日 (mainichi) – todo dia', '毎週 (maishuu) – toda semana', '毎朝 (maiasa) – toda manhã']
    },
    {
      w: '週', r: ['shuu'], h: ['しゅう'], pt: 'semana',
      ex: ['今週 (konshuu) – esta semana', '来週 (raishuu) – próxima semana', '週末 (shuumatsu) – fim de semana']
    },
    {
      w: '朝', r: ['asa', 'chou'], h: ['あさ', 'ちょう'], pt: 'manhã',
      ex: ['今朝 (kesa) – esta manhã', '毎朝 (maiasa) – toda manhã', '朝食 (choushoku) – café da manhã']
    },
    {
      w: '夜', r: ['yoru', 'ya'], h: ['よる', 'や'], pt: 'noite',
      ex: ['夜中 (yonaka) – madrugada', '今夜 (konya) – esta noite', '夜景 (yakei) – paisagem noturna']
    },
    {
      w: '半', r: ['han'], h: ['はん'], pt: 'metade',
      ex: ['半分 (hanbun) – metade', '一時半 (ichiji han) – uma e meia', '半年 (hantoshi) – meio ano']
    },
    {
      w: '何', r: ['nani', 'nan'], h: ['なに', 'なん'], pt: 'o quê, qual',
      ex: ['何時 (nanji) – que horas', '何人 (nannin) – quantas pessoas', '何でも (nandemo) – qualquer coisa']
    },
    {
      w: '名前', r: ['namae'], h: ['なまえ'], pt: 'nome',
      ex: ['名前を書く – escrever o nome', '名前を呼ぶ – chamar pelo nome', 'フルネーム – nome completo']
    },
    {
      w: '友達', r: ['tomodachi'], h: ['ともだち'], pt: 'amigo',
      ex: ['友達を作る – fazer amigos', '友達と遊ぶ – brincar com amigos', '大親友 (daishin-yuu) – melhor amigo']
    },
    {
      w: '安全', r: ['anzen'], h: ['あんぜん'], pt: 'segurança; seguro',
      ex: ['安全な場所 – lugar seguro', '安全運転 – direção segura', '安全第一 – segurança em primeiro lugar']
    },
    {
      w: '高校', r: ['koukou'], h: ['こうこう'], pt: 'ensino médio',
      ex: ['高校生 (koukousei) – estudante do ensino médio', '高校を卒業する – terminar o colégio', '高校の思い出 – memórias do colégio']
    },
    {
      w: '図書館', r: ['toshokan'], h: ['としょかん'], pt: 'biblioteca',
      ex: ['図書館で勉強する – estudar na biblioteca', '図書館員 (toshokanin) – bibliotecário', '公立図書館 – biblioteca pública']
    },
    {
      w: '勉強', r: ['benkyou'], h: ['べんきょう'], pt: 'estudo; estudar',
      ex: ['毎日勉強する – estudar todo dia', '勉強不足 – falta de estudo', '勉強になった – aprendi algo']
    },
    {
      w: '仕事', r: ['shigoto'], h: ['しごと'], pt: 'trabalho, emprego',
      ex: ['仕事をする – trabalhar', '仕事が終わる – terminar o trabalho', '仕事探し – procura de emprego']
    },
    {
      w: '電車', r: ['densha'], h: ['でんしゃ'], pt: 'trem elétrico',
      ex: ['電車に乗る – pegar o trem', '電車を降りる – descer do trem', '終電 (shuuden) – último trem']
    },
    {
      w: '病院', r: ['byouin'], h: ['びょういん'], pt: 'hospital',
      ex: ['病院に行く – ir ao hospital', '病院で働く – trabalhar no hospital', '救急病院 – pronto-socorro']
    },
    { w: '思う', r: ['omou'], h: ['おもう'], pt: 'pensar, achar',
      ex: ['そう思う – acho que sim', '思い出 (omoide) – lembrança', '思い出す (omoidasu) – lembrar'] },
    { w: '知る', r: ['shiru'], h: ['しる'], pt: 'saber, conhecer',
      ex: ['知っている – eu sei', '知識 (chishiki) – conhecimento', '知人 (chijin) – conhecido'] },
    { w: '作る', r: ['tsukuru'], h: ['つくる'], pt: 'fazer, criar',
      ex: ['料理を作る – cozinhar', '作品 (sakuhin) – obra', '作文 (sakubun) – redação'] },
    { w: '教える', r: ['oshieru'], h: ['おしえる'], pt: 'ensinar, informar',
      ex: ['日本語を教える – ensinar japonês', '教室 (kyoushitsu) – sala de aula', '教科書 (kyoukasho) – livro didático'] },
    { w: '開ける', r: ['akeru'], h: ['あける'], pt: 'abrir',
      ex: ['ドアを開ける – abrir a porta', '開く (hiraku) – abrir-se', '開始 (kaishi) – início'] },
    { w: '閉める', r: ['shimeru'], h: ['しめる'], pt: 'fechar',
      ex: ['窓を閉める – fechar a janela', '閉店 (heiten) – fechamento', '閉じる (tojiru) – fechar'] },
    { w: '待つ', r: ['matsu'], h: ['まつ'], pt: 'esperar',
      ex: ['友達を待つ – esperar o amigo', '待合室 (machiaishitsu) – sala de espera', '期待 (kitai) – expectativa'] },
    { w: '持つ', r: ['motsu'], h: ['もつ'], pt: 'segurar, ter, carregar',
      ex: ['荷物を持つ – carregar bagagem', '気持ち (kimochi) – sentimento', '持ち物 – pertences'] },
    { w: '使う', r: ['tsukau'], h: ['つかう'], pt: 'usar, utilizar',
      ex: ['道具を使う – usar ferramenta', '使い方 – modo de usar', '大使 (taishi) – embaixador'] },
    { w: '送る', r: ['okuru'], h: ['おくる'], pt: 'enviar, mandar',
      ex: ['手紙を送る – enviar carta', '送料 (souryou) – frete', '見送る (miokuru) – despedir-se'] },
    { w: '着く', r: ['tsuku'], h: ['つく'], pt: 'chegar',
      ex: ['駅に着く – chegar na estação', '到着 (touchaku) – chegada', '着物 (kimono) – quimono'] },
    { w: '走る', r: ['hashiru'], h: ['はしる'], pt: 'correr',
      ex: ['公園で走る – correr no parque', '走者 (sousha) – corredor', '競走 (kyousou) – corrida'] },
    { w: '売る', r: ['uru'], h: ['うる'], pt: 'vender',
      ex: ['本を売る – vender livros', '売り場 (uriba) – seção de vendas', '売買 (baibai) – compra e venda'] },
    { w: '借りる', r: ['kariru'], h: ['かりる'], pt: 'pegar emprestado',
      ex: ['本を借りる – pegar livro emprestado', '借金 (shakkin) – dívida', '賃借 (chinshaku) – aluguel'] },
    { w: '切る', r: ['kiru'], h: ['きる'], pt: 'cortar',
      ex: ['紙を切る – cortar papel', '大切 (taisetsu) – importante', '切符 (kippu) – bilhete'] },
    { w: '広い', r: ['hiroi'], h: ['ひろい'], pt: 'amplo, espaçoso',
      ex: ['広い部屋 – quarto espaçoso', '広場 (hiroba) – praça', '広告 (koukoku) – propaganda'] },
    { w: '強い', r: ['tsuyoi'], h: ['つよい'], pt: 'forte',
      ex: ['強い風 – vento forte', '勉強 (benkyou) – estudo', '強力 (kyouryoku) – poderoso'] },
    { w: '弱い', r: ['yowai'], h: ['よわい'], pt: 'fraco',
      ex: ['体が弱い – corpo fraco', '弱点 (jakuten) – ponto fraco', '弱者 (jakusha) – pessoa fraca'] },
    { w: '正しい', r: ['tadashii'], h: ['ただしい'], pt: 'correto, justo',
      ex: ['正しい答え – resposta certa', '正直 (shoujiki) – honesto', '正確 (seikaku) – preciso'] },
    { w: '家', r: ['ie', 'ka'], h: ['いえ', 'か'], pt: 'casa, lar',
      ex: ['家に帰る – voltar para casa', '家族 (kazoku) – família', '家賃 (yachin) – aluguel'] },
    { w: '地', r: ['chi', 'ji'], h: ['ち', 'じ'], pt: 'terra, chão, lugar',
      ex: ['地下 (chika) – subsolo', '地図 (chizu) – mapa', '土地 (tochi) – terreno'] },
    { w: '工', r: ['kou', 'ku'], h: ['こう', 'く'], pt: 'obra, construção',
      ex: ['工場 (koujou) – fábrica', '工事 (kouji) – obra', '人工 (jinkou) – artificial'] },
    { w: '自', r: ['ji', 'shi'], h: ['じ', 'し'], pt: 'si mesmo, próprio',
      ex: ['自分 (jibun) – eu mesmo', '自然 (shizen) – natureza', '自動車 (jidousha) – automóvel'] },
    { w: '世', r: ['se', 'yo'], h: ['せ', 'よ'], pt: 'mundo, geração',
      ex: ['世界 (sekai) – mundo', '世の中 (yononaka) – sociedade', '世紀 (seiki) – século'] },
    { w: '運', r: ['un'], h: ['うん'], pt: 'sorte; transportar',
      ex: ['運動 (undou) – exercício', '運転 (unten) – dirigir', '運がいい – ter sorte'] },
    { w: '転', r: ['ten'], h: ['てん'], pt: 'rolar, virar, transferir',
      ex: ['運転 (unten) – dirigir', '自転車 (jitensha) – bicicleta', '転校 (tenkou) – transferência'] },
    { w: '色', r: ['iro', 'shoku'], h: ['いろ', 'しょく'], pt: 'cor',
      ex: ['何色 (naniiro) – que cor', '色々 (iroiro) – vários', '景色 (keshiki) – paisagem'] },
    { w: '同', r: ['onaji', 'dou'], h: ['おなじ', 'どう'], pt: 'mesmo, igual',
      ex: ['同じ (onaji) – o mesmo', '同時 (douji) – ao mesmo tempo', '同僚 (douryou) – colega'] },
    { w: '場', r: ['ba', 'jou'], h: ['ば', 'じょう'], pt: 'lugar, local',
      ex: ['場所 (basho) – lugar', '駐車場 – estacionamento', '工場 (koujou) – fábrica'] },
    { w: '所', r: ['tokoro', 'sho'], h: ['ところ', 'しょ'], pt: 'lugar, ponto',
      ex: ['場所 (basho) – lugar', '事務所 (jimusho) – escritório', '台所 (daidokoro) – cozinha'] },
    { w: '死', r: ['shinu', 'shi'], h: ['しぬ', 'し'], pt: 'morrer, morte',
      ex: ['死ぬ (shinu) – morrer', '死亡 (shibou) – falecimento', '必死 (hisshi) – desesperado'] },
    { w: '通', r: ['tooru', 'tsuu'], h: ['とおる', 'つう'], pt: 'passar, comunicar',
      ex: ['通る (tooru) – passar', '交通 (koutsuu) – trânsito', '通勤 (tsuukin) – ida ao trabalho'] },
    { w: '考える', r: ['kangaeru'], h: ['かんがえる'], pt: 'pensar, refletir',
      ex: ['よく考える – pensar bem', '考え方 – modo de pensar', '参考 (sankou) – referência'] },
    { w: '届ける', r: ['todokeru'], h: ['とどける'], pt: 'entregar, reportar',
      ex: ['届けてください – por favor entregue', '届け先 – destinatário', '届出 (todokede) – notificação'] },
  ],

  N3: [
    {
      w: '明るい', r: ['akarui'], h: ['あかるい'], pt: 'brilhante, claro, alegre',
      ex: ['明るい部屋 – quarto iluminado', '明るい性格 – personalidade alegre', '明るい未来 – futuro brilhante']
    },
    {
      w: '悪い', r: ['warui'], h: ['わるい'], pt: 'ruim, mau',
      ex: ['天気が悪い – o clima está ruim', '気分が悪い – me sinto mal', '悪人 (akunin) – vilão']
    },
    {
      w: '意味', r: ['imi'], h: ['いみ'], pt: 'significado, sentido',
      ex: ['意味がわからない – não entendo', '意味がない – não faz sentido', '深い意味 – significado profundo']
    },
    {
      w: '運動', r: ['undou'], h: ['うんどう'], pt: 'exercício físico, movimento',
      ex: ['毎日運動する – exercitar-se todo dia', '運動不足 – falta de exercício', '運動会 – festival esportivo']
    },
    {
      w: '映画', r: ['eiga'], h: ['えいが'], pt: 'filme, cinema',
      ex: ['映画を見る – assistir a um filme', '映画館 (eigakan) – cinema', '映画監督 – diretor de cinema']
    },
    {
      w: '音楽', r: ['ongaku'], h: ['おんがく'], pt: 'música',
      ex: ['音楽を聴く – ouvir música', '音楽家 (ongakuka) – músico', '音楽会 (ongakukai) – concerto']
    },
    {
      w: '感じ', r: ['kanji'], h: ['かんじ'], pt: 'sensação, impressão',
      ex: ['いい感じ – boa impressão', '懐かしい感じ – sensação nostálgica', '感じが悪い – dá má impressão']
    },
    {
      w: '急ぐ', r: ['isogu'], h: ['いそぐ'], pt: 'se apressar, ter pressa',
      ex: ['急いでください – se apresse', '急行電車 – trem expresso', '緊急 (kinkyuu) – emergência']
    },
    {
      w: '好き', r: ['suki'], h: ['すき'], pt: 'gostar de, favorito',
      ex: ['音楽が好き – gosto de música', '大好き (daisuki) – amar muito', '好きな食べ物 – comida favorita']
    },
    {
      w: '心配', r: ['shinpai'], h: ['しんぱい'], pt: 'preocupação, ansiedade',
      ex: ['心配しないで – não se preocupe', '心配事 – motivo de preocupação', 'ご心配なく – não se preocupe (formal)']
    },
    {
      w: '使う', r: ['tsukau'], h: ['つかう'], pt: 'usar, utilizar',
      ex: ['道具を使う – usar uma ferramenta', '使い方 (tsukaikata) – modo de usar', '大使 (taishi) – embaixador']
    },
    {
      w: '始める', r: ['hajimeru'], h: ['はじめる'], pt: 'começar algo (transitivo)',
      ex: ['仕事を始める – começar a trabalhar', 'はじめまして – prazer em conhecê-lo', '開始 (kaishi) – início']
    },
    {
      w: '持つ', r: ['motsu'], h: ['もつ'], pt: 'segurar, ter, carregar',
      ex: ['荷物を持つ – carregar bagagem', '意見を持つ – ter uma opinião', '持ち物 (mochimono) – pertences']
    },
    {
      w: '勝つ', r: ['katsu'], h: ['かつ'], pt: 'vencer, ganhar',
      ex: ['試合に勝つ – vencer o jogo', '勝利 (shouri) – vitória', '優勝 (yuushou) – campeonato']
    },
    {
      w: '色々', r: ['iroiro'], h: ['いろいろ'], pt: 'vários, diverso',
      ex: ['色々な食べ物 – vários tipos de comida', '色々と考えた – pensei em várias coisas', '色々ありがとう – obrigado por tudo']
    },
    {
      w: '集める', r: ['atsumeru'], h: ['あつめる'], pt: 'coletar, juntar, reunir',
      ex: ['切手を集める – colecionar selos', '情報を集める – reunir informações', '集合 (shuugou) – ponto de encontro']
    },
    {
      w: '重い', r: ['omoi'], h: ['おもい'], pt: 'pesado, grave, importante',
      ex: ['重い荷物 – bagagem pesada', '重大な問題 – problema grave', '体重 (taijuu) – peso corporal']
    },
    {
      w: '春', r: ['haru'], h: ['はる'], pt: 'primavera',
      ex: ['春が来た – a primavera chegou', '春休み (haruyasumi) – férias de primavera', '青春 (seishun) – juventude']
    },
    {
      w: '走る', r: ['hashiru'], h: ['はしる'], pt: 'correr',
      ex: ['公園で走る – correr no parque', '走者 (sousha) – corredor', '競走 (kyousou) – corrida (competição)']
    },
    {
      w: '知る', r: ['shiru'], h: ['しる'], pt: 'saber, conhecer, descobrir',
      ex: ['答えを知っている – sei a resposta', '知識 (chishiki) – conhecimento', '知人 (chijin) – conhecido']
    },
    {
      w: '転ぶ', r: ['korobu'], h: ['ころぶ'], pt: 'tropeçar, cair no chão',
      ex: ['転んで怪我した – caiu e se machucou', '運転 (unten) – dirigir', '転校 (tenkou) – transferência escolar']
    },
    {
      w: '通る', r: ['tooru'], h: ['とおる'], pt: 'passar por, percorrer',
      ex: ['駅を通る – passar pela estação', '交通 (koutsuu) – transporte', '通勤 (tsuukin) – deslocamento ao trabalho']
    },
    {
      w: '特別', r: ['tokubetsu'], h: ['とくべつ'], pt: 'especial, excepcional',
      ex: ['特別な日 – dia especial', '特別割引 – desconto especial', '特徴 (tokuchou) – característica']
    },
    {
      w: '難しい', r: ['muzukashii'], h: ['むずかしい'], pt: 'difícil',
      ex: ['難しい問題 – problema difícil', '難関 (nankan) – barreira difícil', '困難 (konnan) – dificuldade']
    },
    {
      w: '熱い', r: ['atsui'], h: ['あつい'], pt: 'quente (ao toque)',
      ex: ['熱いコーヒー – café quente', '熱 (netsu) – febre', '熱心 (nesshin) – entusiasmo, dedicação']
    },
    {
      w: '病気', r: ['byouki'], h: ['びょうき'], pt: 'doença; estar doente',
      ex: ['病気になる – ficar doente', '病院 (byouin) – hospital', '病人 (byounin) – pessoa doente']
    },
    {
      w: '服', r: ['fuku'], h: ['ふく'], pt: 'roupa, vestuário',
      ex: ['服を着る – vestir roupa', '洋服 (youfuku) – roupa ocidental', '制服 (seifuku) – uniforme']
    },
    {
      w: '物語', r: ['monogatari'], h: ['ものがたり'], pt: 'história, conto, narrativa',
      ex: ['昔話の物語 – conto antigo', '恋愛物語 – história de amor', '物語を読む – ler uma narrativa']
    },
    {
      w: '有名', r: ['yuumei'], h: ['ゆうめい'], pt: 'famoso, conhecido',
      ex: ['有名な歌手 – cantor famoso', '有名人 (yuumeijin) – celebridade', '世界的に有名 – famoso no mundo todo']
    },
    {
      w: '理由', r: ['riyuu'], h: ['りゆう'], pt: 'razão, motivo',
      ex: ['理由を教えて – me conta o motivo', '理由がない – não há razão', '何の理由で？ – por qual razão?']
    },
    {
      w: '力', r: ['chikara'], h: ['ちから'], pt: 'força, poder, capacidade',
      ex: ['力がある – ter força', '努力 (doryoku) – esforço', '体力 (tairyoku) – resistência física']
    },
    {
      w: '旅行', r: ['ryokou'], h: ['りょこう'], pt: 'viagem',
      ex: ['旅行する – fazer uma viagem', '海外旅行 – viagem ao exterior', '旅行者 (ryokousha) – viajante']
    },
    {
      w: '全部', r: ['zenbu'], h: ['ぜんぶ'], pt: 'tudo, ao todo, inteiro',
      ex: ['全部食べた – comi tudo', '全部で – ao todo, no total', '全員 (zenin) – todos os membros']
    },
    {
      w: '努力', r: ['doryoku'], h: ['どりょく'], pt: 'esforço, dedicação',
      ex: ['努力する – se esforçar', '努力家 (doryokuka) – pessoa esforçada', '努力が実る – o esforço dá frutos']
    },
    {
      w: '親切', r: ['shinsetsu'], h: ['しんせつ'], pt: 'gentileza, bondade; amável',
      ex: ['親切な人 – pessoa gentil', '親切にする – agir com gentileza', 'ご親切に – que gentileza!']
    },
    {
      w: '安心', r: ['anshin'], h: ['あんしん'], pt: 'tranquilidade, alívio',
      ex: ['安心した – fiquei aliviado', '安心してください – fique tranquilo', '安心感 – sensação de segurança']
    },
    {
      w: '記念', r: ['kinen'], h: ['きねん'], pt: 'comemoração, memória',
      ex: ['記念日 (kinenbi) – data comemorativa', '記念写真 – foto comemorativa', '記念品 (kinenhin) – souvenir']
    },
    {
      w: '合う', r: ['au'], h: ['あう'], pt: 'combinar, caber, condizer',
      ex: ['サイズが合う – o tamanho serve', '意見が合う – as opiniões coincidem', '場合 (baai) – situação, caso']
    },
    {
      w: '都合', r: ['tsugou'], h: ['つごう'], pt: 'conveniência, disponibilidade',
      ex: ['都合がいい – conveniente', '都合が悪い – inconveniente', 'ご都合はいかがですか？ – qual sua disponibilidade?']
    },
    {
      w: '足りる', r: ['tariru'], h: ['たりる'], pt: 'ser suficiente, bastar',
      ex: ['お金が足りない – dinheiro insuficiente', '時間が足りる – o tempo é suficiente', '不足 (fusoku) – insuficiência']
    },
    {
      w: '消える', r: ['kieru'], h: ['きえる'], pt: 'desaparecer, apagar-se',
      ex: ['星が消える – a estrela desaparece', 'ファイルが消えた – o arquivo sumiu', '消防車 (shobousha) – caminhão de bombeiros']
    },
    { w: '経験', r: ['keiken'], h: ['けいけん'], pt: 'experiência, vivência',
      ex: ['経験がある – ter experiência', '経験者 (keikensha) – pessoa experiente', '経験を積む – acumular experiência'] },
    { w: '決める', r: ['kimeru'], h: ['きめる'], pt: 'decidir, determinar',
      ex: ['予定を決める – definir a agenda', '決定 (kettei) – decisão', '決心 (kesshin) – determinação'] },
    { w: '変わる', r: ['kawaru'], h: ['かわる'], pt: 'mudar, trocar',
      ex: ['天気が変わる – o clima muda', '変化 (henka) – mudança', '大きく変わった – mudou muito'] },
    { w: '調べる', r: ['shiraberu'], h: ['しらべる'], pt: 'investigar, pesquisar',
      ex: ['辞書で調べる – pesquisar no dicionário', '調査 (chousa) – investigação', '調べてみる – tentar investigar'] },
    { w: '選ぶ', r: ['erabu'], h: ['えらぶ'], pt: 'escolher, selecionar',
      ex: ['答えを選ぶ – escolher a resposta', '選手 (senshu) – atleta', '選挙 (senkyo) – eleição'] },
    { w: '受ける', r: ['ukeru'], h: ['うける'], pt: 'receber, sofrer, fazer (exame)',
      ex: ['試験を受ける – fazer exame', '受付 (uketsuke) – recepção', '影響を受ける – sofrer influência'] },
    { w: '残る', r: ['nokoru'], h: ['のこる'], pt: 'restar, sobrar, permanecer',
      ex: ['少し残った – sobrou um pouco', '残念 (zannen) – que pena', '記憶に残る – ficar na memória'] },
    { w: '払う', r: ['harau'], h: ['はらう'], pt: 'pagar, limpar',
      ex: ['お金を払う – pagar', '支払い (shiharai) – pagamento', '注意を払う – prestar atenção'] },
    { w: '必要', r: ['hitsuyou'], h: ['ひつよう'], pt: 'necessário, essencial',
      ex: ['必要なもの – coisa necessária', '必要がない – não é necessário', '必要に応じて – conforme necessário'] },
    { w: '深い', r: ['fukai'], h: ['ふかい'], pt: 'profundo',
      ex: ['深い海 – mar profundo', '深夜 (shinya) – madrugada', '深い意味 – significado profundo'] },
    { w: '若い', r: ['wakai'], h: ['わかい'], pt: 'jovem',
      ex: ['若い人 – pessoa jovem', '若者 (wakamono) – jovens', '若返る (wakagaeru) – rejuvenescer'] },
    { w: '危ない', r: ['abunai'], h: ['あぶない'], pt: 'perigoso',
      ex: ['危ない場所 – lugar perigoso', '危険 (kiken) – perigo', '危機 (kiki) – crise'] },
    { w: '込む', r: ['komu'], h: ['こむ'], pt: 'estar cheio, entrar',
      ex: ['電車が込んでいる – o trem está lotado', '申し込む (moushikomu) – se inscrever', '思い込む – estar convicto'] },
    { w: '比べる', r: ['kuraberu'], h: ['くらべる'], pt: 'comparar',
      ex: ['二つを比べる – comparar os dois', '比較 (hikaku) – comparação', '比べ物にならない – incomparável'] },
    { w: '続ける', r: ['tsuzukeru'], h: ['つづける'], pt: 'continuar, prosseguir',
      ex: ['勉強を続ける – continuar estudando', '継続 (keizoku) – continuidade', '続けてください – por favor continue'] },
    { w: '交通', r: ['koutsuu'], h: ['こうつう'], pt: 'tráfego, transporte',
      ex: ['交通事故 – acidente de trânsito', '交通機関 – meios de transporte', '交通費 – custo de transporte'] },
    { w: '経済', r: ['keizai'], h: ['けいざい'], pt: 'economia',
      ex: ['経済学 (keizaigaku) – ciências econômicas', '経済的 – econômico', '世界経済 – economia mundial'] },
    { w: '技術', r: ['gijutsu'], h: ['ぎじゅつ'], pt: 'tecnologia, técnica',
      ex: ['技術者 (gijutsusha) – engenheiro', '技術的 – técnico', '情報技術 – tecnologia da informação'] },
    { w: '関係', r: ['kankei'], h: ['かんけい'], pt: 'relação, conexão',
      ex: ['人間関係 – relações humanas', '関係がある – ter relação', '関係ない – não tem relação'] },
    { w: '相談', r: ['soudan'], h: ['そうだん'], pt: 'consulta, conselho',
      ex: ['相談する – consultar', '相談に乗る – dar conselho', '相談相手 – conselheiro'] },
    { w: '準備', r: ['junbi'], h: ['じゅんび'], pt: 'preparação',
      ex: ['準備する – preparar', '準備中 – em preparação', '準備ができた – está pronto'] },
    { w: '約束', r: ['yakusoku'], h: ['やくそく'], pt: 'promessa, compromisso',
      ex: ['約束する – prometer', '約束を守る – cumprir promessa', '約束を破る – quebrar promessa'] },
    { w: '確認', r: ['kakunin'], h: ['かくにん'], pt: 'confirmação, verificação',
      ex: ['確認する – confirmar', '確認してください – por favor confirme', '身分確認 – verificação de identidade'] },
    { w: '政治', r: ['seiji'], h: ['せいじ'], pt: 'política',
      ex: ['政治家 (seijika) – político', '政治的 – político', '政治学 – ciência política'] },
    { w: '文化', r: ['bunka'], h: ['ぶんか'], pt: 'cultura',
      ex: ['日本文化 – cultura japonesa', '文化祭 – festival cultural', '異文化 – cultura diferente'] },
    { w: '自然', r: ['shizen'], h: ['しぜん'], pt: 'natureza; natural',
      ex: ['自然が美しい – a natureza é bela', '自然に – naturalmente', '自然災害 – desastre natural'] },
    { w: '環境', r: ['kankyou'], h: ['かんきょう'], pt: 'ambiente, meio ambiente',
      ex: ['環境問題 – problema ambiental', '生活環境 – ambiente de vida', '環境に優しい – ecológico'] },
    { w: '将来', r: ['shourai'], h: ['しょうらい'], pt: 'futuro',
      ex: ['将来の夢 – sonho para o futuro', '将来的に – futuramente', '将来を考える – pensar no futuro'] },
    { w: '説明', r: ['setsumei'], h: ['せつめい'], pt: 'explicação',
      ex: ['説明する – explicar', '説明書 – manual', '説明が足りない – falta explicação'] },
  ],
};

const RADICALS = {
  // ─── N5 KANJIS (1-30) ───
  '一': {
    parts: [{ char: '一', name: 'ichi', meaning: 'um' }],
    mnemonic: 'Uma única linha horizontal representa o número um.'
  },
  '二': {
    parts: [{ char: '二', name: 'ni', meaning: 'dois' }],
    mnemonic: 'Duas linhas horizontais representam o número dois.'
  },
  '三': {
    parts: [{ char: '三', name: 'san', meaning: 'três' }],
    mnemonic: 'Três linhas horizontais representam o número três.'
  },
  '四': {
    parts: [
      { char: '囗', name: 'kuni-gamae', meaning: 'caixa, contorno' },
      { char: '八', name: 'hachi', meaning: 'oito / dividir' }
    ],
    mnemonic: 'Um quadrado com coisas sendo divididas dentro. Quatro lados formando uma caixa.'
  },
  '五': {
    parts: [
      { char: '二', name: 'ni', meaning: 'dois' },
      { char: '丨', name: 'tate-bou', meaning: 'linha vertical' },
      { char: '一', name: 'ichi', meaning: 'um (base)' }
    ],
    mnemonic: 'Linhas que se cruzam conectando o céu e a terra, representando o número 5 usando a mão inteira.'
  },
  '六': {
    parts: [
      { char: '亠', name: 'nabebuta', meaning: 'tampa' },
      { char: '八', name: 'hachi', meaning: 'oito / pernas' }
    ],
    mnemonic: 'Uma tampa sobre duas pernas. Um animalzinho de 6 pernas coberto.'
  },
  '七': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'um (horizontal)' },
      { char: '乚', name: 'magari', meaning: 'anzol' }
    ],
    mnemonic: 'Uma linha sendo cortada torta, como o número 7 virado de cabeça para baixo.'
  },
  '八': {
    parts: [{ char: '八', name: 'hachi', meaning: 'oito, dividir' }],
    mnemonic: 'Duas linhas se separando (dividindo), indicando os oito pontos cardeais.'
  },
  '九': {
    parts: [
      { char: '丿', name: 'no', meaning: 'linha curva (esquerda)' },
      { char: '乙', name: 'otsu', meaning: 'gancho em formato de Z' }
    ],
    mnemonic: 'Alguém fazendo flexões e suando em bica para conseguir chegar no 9.'
  },
  '十': {
    parts: [{ char: '十', name: 'juu', meaning: 'dez, cruz' }],
    mnemonic: 'Uma cruz completa contendo as 4 direções e o centro: junta-se formando dez.'
  },
  '百': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'um' },
      { char: '白', name: 'shiro', meaning: 'branco' }
    ],
    mnemonic: 'O número um cem vezes torna um papel completamente branco.'
  },
  '千': {
    parts: [
      { char: '丿', name: 'no', meaning: 'curva' },
      { char: '十', name: 'juu', meaning: 'dez' }
    ],
    mnemonic: 'Um traço extra no dez para o transformar no mil.'
  },
  '万': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'um' },
      { char: '勹', name: 'tsutsumi-gamae', meaning: 'embrulho, pacote' },
      { char: '丿', name: 'no', meaning: 'traço curto' }
    ],
    mnemonic: 'No Japão rural antigo, você usava uma foice parecida para colher dez mil plantas.'
  },
  '円': {
    parts: [
      { char: '冂', name: 'keigamae', meaning: 'caixa de cabeça pra baixo / contorno' },
      { char: '土', name: 'tsuchi/dois', meaning: 'na forma antiga formavam círculos' }
    ],
    mnemonic: 'Visualmente parece uma vitrine de loja com produtos à venda... em Ienes!'
  },
  '年': {
    parts: [
      { char: '丿', name: 'no', meaning: 'traço curto' },
      { char: '二', name: 'ni', meaning: 'dois' },
      { char: '丨', name: 'tate-bou', meaning: 'tronco / pilar' }
    ],
    mnemonic: 'Uma pessoa carregando a colheita nas costas após um ano inteiro de espera.'
  },
  '月': {
    parts: [{ char: '月', name: 'tsuki', meaning: 'lua, carne' }],
    mnemonic: 'O desenho de uma lua crescente e com algumas nuvens na frente dela.'
  },
  '日': {
    parts: [{ char: '日', name: 'hi', meaning: 'sol, dia' }],
    mnemonic: 'O formato quadrado de um sol (antigamente redondo) com uma mancha solar no meio.'
  },
  '時': {
    parts: [
      { char: '日', name: 'hi', meaning: 'sol, dia' },
      { char: '寺', name: 'tera', meaning: 'templo budista' }
    ],
    mnemonic: 'Antigamente as pessoas mediam o tempo e a hora através do sol no templo.'
  },
  '分': {
    parts: [
      { char: '八', name: 'hachi', meaning: 'dividir' },
      { char: '刀', name: 'katana', meaning: 'espada, faca' }
    ],
    mnemonic: 'Usar uma faca para dividir algo ao meio, cortando a hora em minutos.'
  },
  '上': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'chão, linha de base' },
      { char: '卜', name: 'boku', meaning: 'marcador em cima' }
    ],
    mnemonic: 'A linha longa é o chão, e o tracinho está indicando tudo que fica para cima.'
  },
  '下': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'teto, chão elevado' },
      { char: '卜', name: 'boku (virado)', meaning: 'marcador embaixo' }
    ],
    mnemonic: 'Base e algo pendurado para baixo, simbolizando "abaixo" ou "embaixo".'
  },
  '中': {
    parts: [
      { char: '口', name: 'kuchi', meaning: 'boca, buraco' },
      { char: '丨', name: 'tate-bou', meaning: 'flecha / vara' }
    ],
    mnemonic: 'Uma flecha atingindo perfeitamente o meio do alvo.'
  },
  '大': {
    parts: [{ char: '大', name: 'dai', meaning: 'grande, pessoa' }],
    mnemonic: 'Uma pessoa abrindo os braços e as pernas para parecer o mais grande possível.'
  },
  '小': {
    parts: [
      { char: '亅', name: 'hane-bou', meaning: 'anzol, graveto principal' },
      { char: '八', name: 'hachi', meaning: 'dividir / fragmentos' }
    ],
    mnemonic: 'Três pequenos pedaços ou farelos de algo que se estilhaçou.'
  },
  '山': {
    parts: [{ char: '山', name: 'yama', meaning: 'montanha' }],
    mnemonic: 'Desenho de três picos de montanhas colados um ao outro (o do meio é maior).'
  },
  '川': {
    parts: [{ char: '川', name: 'kawa', meaning: 'rio' }],
    mnemonic: 'A água de um rio descendo pela correnteza, contornando a terra dos dois lados.'
  },
  '海': {
    parts: [
      { char: '氵', name: 'sanzui', meaning: 'água' },
      { char: '毎', name: 'mai', meaning: 'todo, cada' }
    ],
    mnemonic: 'Toda água abundante e vasta do mundo forma o grande mar.'
  },
  '空': {
    parts: [
      { char: '穴', name: 'ana', meaning: 'buraco, caverna' },
      { char: '工', name: 'kou', meaning: 'trabalho, régua' }
    ],
    mnemonic: 'Olhar de dentro do buraco da caverna, sendo possível ver somente o céu (vazio).'
  },
  '火': {
    parts: [{ char: '火', name: 'hi', meaning: 'fogo' }],
    mnemonic: 'As chamas subindo por um amontoado de gravetos pegando fogo de uma fogueira.'
  },
  '水': {
    parts: [{ char: '水', name: 'mizu', meaning: 'água' }],
    mnemonic: 'Gotas de água se espatifando e respingando ao bater em uma superfície da água central.'
  },
  '木': {
    parts: [{ char: '木', name: 'moku', meaning: 'árvore, madeira' }],
    mnemonic: 'O tronco de uma árvore com seus galhos se estendendo para baixo.'
  },
  '金': {
    parts: [
      { char: '𠆢', name: 'yane', meaning: 'teto, telhado' },
      { char: '王', name: 'ou', meaning: 'rei' },
      { char: '八', name: 'hachi', meaning: 'oito (como pedaços de ouro)' }
    ],
    mnemonic: 'O rei guardando seus pedaços preciosos de ouro debaixo do teto do palácio.'
  },
  '土': {
    parts: [
      { char: '十', name: 'juu', meaning: 'cruz, prego' },
      { char: '一', name: 'ichi', meaning: 'chão' }
    ],
    mnemonic: 'Uma cruz fincada no chão marcando a terra.'
  },
  '人': {
    parts: [{ char: '人', name: 'hito', meaning: 'pessoa' }],
    mnemonic: 'O perfil de uma pessoa em pé com as duas pernas abertas caminhando.'
  },
  '口': {
    parts: [{ char: '口', name: 'kuchi', meaning: 'boca, buraco' }],
    mnemonic: 'O formato escancarado de uma boca quadrada aberta.'
  },
  '手': {
    parts: [{ char: '手', name: 'te', meaning: 'mão' }],
    mnemonic: 'As linhas da palma de uma mão e o formato dos pulsos.'
  },
  '目': {
    parts: [{ char: '目', name: 'me', meaning: 'olho' }],
    mnemonic: 'O contorno de um olho virado de lado, com a íris quadrada no centro.'
  },
  '耳': {
    parts: [{ char: '耳', name: 'mimi', meaning: 'orelha' }],
    mnemonic: 'As várias dobras cartilaginosas que formam o pavilhão auricular de uma orelha.'
  },
  '心': {
    parts: [{ char: '心', name: 'kokoro', meaning: 'coração' }],
    mnemonic: 'Os quatro traços representam as veias e vasos pulsando do formato de um coração.'
  },
  '気': {
    parts: [
      { char: '气', name: 'kigamae', meaning: 'vapor, ar' },
      { char: 'メ', name: 'me', meaning: 'espada, energia' }
    ],
    mnemonic: 'A energia invisível que flui no ar e alimenta as ações de força interior.'
  },
  '男': {
    parts: [
      { char: '田', name: 'ta', meaning: 'campo de arroz' },
      { char: '力', name: 'chikara', meaning: 'força' }
    ],
    mnemonic: 'Trabalhar usando a força física nos campos de arroz era papel do homem na antiguidade.'
  },
  '女': {
    parts: [{ char: '女', name: 'onna', meaning: 'mulher' }],
    mnemonic: 'O formato curvo e gracioso das vestes de uma mulher ajoelhada tradicionalmente.'
  },
  '子': {
    parts: [{ char: '子', name: 'ko', meaning: 'criança' }],
    mnemonic: 'Uma criança embrulhadinha e com os braços abertos querendo colo.'
  },
  '本': {
    parts: [
      { char: '木', name: 'moku', meaning: 'árvore' },
      { char: '一', name: 'ichi', meaning: 'um (linha horizontal na base)' }
    ],
    mnemonic: 'Marcando a base de uma árvore, temos a raiz. Livros (hon) são a raiz ou origem do conhecimento.'
  },
  '語': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'dizer, palavras' },
      { char: '五', name: 'go', meaning: 'cinco' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'Palavras ditas da boca, com cinco sentidos. Falar muitas palavras se torna um idioma.'
  },
  '国': {
    parts: [
      { char: '囗', name: 'kuni-gamae', meaning: 'fronteira, caixa' },
      { char: '玉', name: 'tama', meaning: 'joia, gema' }
    ],
    mnemonic: 'Uma terra valiosa como joia, protegida por grandes muralhas e fronteiras: um país.'
  },
  '学': {
    parts: [
      { char: '⺍', name: 'tsuu', meaning: 'pequeno, estudar (topo)' },
      { char: '冖', name: 'wakanmuri', meaning: 'coroa, cobertura' },
      { char: '子', name: 'ko', meaning: 'criança' }
    ],
    mnemonic: 'Crianças debaixo de um grande teto com ferramentas na cabeça absorvendo conhecimento: a escola.'
  },
  '生': {
    parts: [{ char: '生', name: 'sei', meaning: 'nascer, dar vida' }],
    mnemonic: 'Um pequeno broto crescendo forte do chão, o início de uma nova vida.'
  },
  '花': {
    parts: [
      { char: '艹', name: 'kusa-kanmuri', meaning: 'planta, grama (topo)' },
      { char: '化', name: 'ka', meaning: 'mudança, transformar' }
    ],
    mnemonic: 'O momento mágico em que uma simples planta muda (transforma) em uma linda flor.'
  },
  '車': {
    parts: [{ char: '車', name: 'kuruma', meaning: 'carro, veículo' }],
    mnemonic: 'Se você olhar de cima, vê as duas rodas laterais e o chassi no centro de uma carroça.'
  },
  '友': {
    parts: [
      { char: 'ナ', name: 'hidari', meaning: 'mão esquerda' },
      { char: '又', name: 'mata', meaning: 'mão direita / novamente' }
    ],
    mnemonic: 'Duas mãos se entrelaçando em apoio mútuo, o símbolo de um bom amigo.'
  },
  '先': {
    parts: [
      { char: '土', name: 'tsuchi', meaning: 'terra (variante)' },
      { char: '儿', name: 'ninnyo', meaning: 'pernas humanas (andando)' }
    ],
    mnemonic: 'Alguém que usou suas pernas para andar e chegar à terra *antes* de você.'
  },
  '休': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '木', name: 'moku', meaning: 'árvore' }
    ],
    mnemonic: 'Uma pessoa encostada ao lado de uma árvore tirando um merecido descanso.'
  },
  '外': {
    parts: [
      { char: '夕', name: 'yuu', meaning: 'tarde, entardecer' },
      { char: '卜', name: 'boku', meaning: 'varinha mágica / previsão' }
    ],
    mnemonic: 'Na antiguidade, usar a varinha de adivinhação fora de casa só de tarde para não espantar a magia.'
  },
  '午': {
    parts: [{ char: '午', name: 'go', meaning: 'meio-dia, cavalo do zodíaco' }],
    mnemonic: 'Parece o número 10 (十) com algo deitado no topo bloqueando o caminho: o ponteiro batendo no topo, meio-dia.'
  },
  '校': {
    parts: [
      { char: '木', name: 'kihen', meaning: 'árvore, madeira' },
      { char: '交', name: 'majiru', meaning: 'misturar, cruzar' }
    ],
    mnemonic: 'No Japão rural, edifícios feitos de madeira onde caminhos de crianças se cruzam: a escola.'
  },
  '名': {
    parts: [
      { char: '夕', name: 'yuu', meaning: 'anoitecer, tarde' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'Quando anoitece e você não consegue enxergar o rosto, usa a boca para chamar o nome.'
  },
  '間': {
    parts: [
      { char: '門', name: 'mon', meaning: 'portões duplos' },
      { char: '日', name: 'hi', meaning: 'sol' }
    ],
    mnemonic: 'Os raios do sol passando exatamente entre o espaço vazio no meio dos dois portões.'
  },
  '長': {
    parts: [{ char: '長', name: 'chou', meaning: 'longo, chefe' }],
    mnemonic: 'O perfil de um chefe idoso de cabelos longos varrendo o chão com uma bengala.'
  },
  '母': {
    parts: [{ char: '母', name: 'haha', meaning: 'mãe' }],
    mnemonic: 'A imagem de uma mulher com dois pontinhos seios largos amamentando, o maior símbolo de nutrição materna.'
  },
  '父': {
    parts: [{ char: '父', name: 'chichi', meaning: 'pai' }],
    mnemonic: 'Duas mãos firmes segurando dois eixos ou varas cruzadas, um símbolo arcaico de autoridade e disciplina paterna.'
  },
  '白': {
    parts: [
      { char: '日', name: 'hi', meaning: 'sol' },
      { char: '丿', name: 'no', meaning: 'raio' }
    ],
    mnemonic: 'Um pequeno raio de sol escapando pelo topo, simbolizando a luz branca e brilhante do sol.'
  },
  '雨': {
    parts: [{ char: '雨', name: 'ame', meaning: 'chuva' }],
    mnemonic: 'Gotas caindo do céu, representadas pelos quatro pontos e presas dentro da janela que é a nuvem.'
  },
  '高': {
    parts: [
      { char: '亠', name: 'nabebuta', meaning: 'tampa (teto)' },
      { char: '口', name: 'kuchi', meaning: 'boca, janela' },
      { char: '冂', name: 'keigamae', meaning: 'portão, estrutura externa' }
    ],
    mnemonic: 'Um prédio muito alto com um telhado em cima e portões e janelas no meio da estrutura.'
  },
  '天': {
    parts: [
      { char: '大', name: 'dai', meaning: 'grande' },
      { char: '一', name: 'ichi', meaning: 'um (o mais alto)' }
    ],
    mnemonic: 'Acima de um homem grande existe apenas uma única coisa mais majestosa: o próprio céu.'
  },
  '食': {
    parts: [
      { char: '𠆢', name: 'yane', meaning: 'teto, telhado' },
      { char: '良', name: 'yoi', meaning: 'bom' }
    ],
    mnemonic: 'Reunir pessoas sob o mesmo teto para compartilhar algo bom para a saúde do corpo: a comida.'
  },
  '足': {
    parts: [
      { char: '口', name: 'kuchi', meaning: 'boca, perna aberta (antigo)' },
      { char: '止', name: 'tomeru', meaning: 'parar, pisar' }
    ],
    mnemonic: 'A metade superior do corpo e a parte inferior focada no pé que pisa no chão.'
  },
  '体': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '本', name: 'hon', meaning: 'origem, principal' }
    ],
    mnemonic: 'A parte principal (origem) e fundamental de uma pessoa é o seu próprio corpo físico.'
  },
  '入': {
    parts: [{ char: '入', name: 'iru', meaning: 'entrar' }],
    mnemonic: 'Parece o kanji de pessoa 人, mas a perna direita está entrando e empurrando a esquerda da frente.'
  },
  '出': {
    parts: [
      { char: '山', name: 'yama', meaning: 'montanha' },
      { char: '山', name: 'yama', meaning: 'montanha' }
    ],
    mnemonic: 'Uma montanha em cima de outra montanha representa um broto rompendo a terra e saindo para fora.'
  },
  '来': {
    parts: [
      { char: '木', name: 'moku', meaning: 'árvore, madeira' },
      { char: '丷', name: 'hachi', meaning: 'trigo (no topo antigo), direção externa' }
    ],
    mnemonic: 'A forma antiga parecia uma espiga de trigo, que "veio" de longe para alimentar as pessoas.'
  },
  '見': {
    parts: [
      { char: '目', name: 'me', meaning: 'olho' },
      { char: '儿', name: 'ninnyo', meaning: 'pernas' }
    ],
    mnemonic: 'Um olho enorme em cima de pernas humanas andando por aí para tentar ver tudo ao redor.'
  },
  '行': {
    parts: [
      { char: '彳', name: 'gyouninben', meaning: 'passos' },
      { char: '亍', name: 'teku', meaning: 'passos adiante' }
    ],
    mnemonic: 'O desenho de um grande cruzamento por onde milhares de pessoas andam para "ir" a todos os lugares.'
  },
  '聞': {
    parts: [
      { char: '門', name: 'mon', meaning: 'portões' },
      { char: '耳', name: 'mimi', meaning: 'orelha' }
    ],
    mnemonic: 'Você encostando a sua orelha perfeitamente no vão do portão principal para ouvir a conversa dos seus vizinhos.'
  },
  '読': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'palavras, dizer' },
      { char: '売', name: 'uru', meaning: 'vender' }
    ],
    mnemonic: 'Um vendedor falando e lendo as palavras do seu folheto em voz alta para atrair clientes.'
  },
  '書': {
    parts: [
      { char: '聿', name: 'fude', meaning: 'pincel' },
      { char: '曰', name: 'etsu', meaning: 'dizer' }
    ],
    mnemonic: 'Usar um pincel para registrar no papel aquilo que alguém disse em voz alta.'
  },
  '話': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'palavras' },
      { char: '舌', name: 'shita', meaning: 'língua' }
    ],
    mnemonic: 'Basta apenas usar as palavras junto com o movimento da língua que surge a conversa.'
  },

  // ─── N4 KANJIS (1-30) ───
  '会': {
    parts: [
      { char: '人', name: 'yane (pessoa)', meaning: 'pessoas juntas, telhado' },
      { char: '云', name: 'iu', meaning: 'nuvem / dizer' }
    ],
    mnemonic: 'Várias pessoas sob o mesmo teto conversando e discutindo ideias em uma reunião.'
  },
  '社': {
    parts: [
      { char: '礻', name: 'shimesuhen', meaning: 'altar, espíritos, indicar' },
      { char: '土', name: 'tsuchi', meaning: 'terra, chão' }
    ],
    mnemonic: 'Um altar colocado na terra abençoada, representando primeiro um templo e depois a "companhia" ou empresa que se reúne.'
  },
  '電': {
    parts: [
      { char: '雨', name: 'amekanmuri', meaning: 'chuva' },
      { char: '申', name: 'maosu', meaning: 'dizer / estender (antigamente relâmpago)' }
    ],
    mnemonic: 'O relâmpago (energia) brilhando rapidamente durante uma forte tempestade com chuva.'
  },
  '話す': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'palavras' },
      { char: '舌', name: 'shita', meaning: 'língua' }
    ],
    mnemonic: 'Usar as palavras junto com o movimento da língua para falar ou conversar.'
  },
  '食べる': {
    parts: [
      { char: '𠆢', name: 'yane', meaning: 'teto, pessoa' },
      { char: '良', name: 'yoi', meaning: 'bom' }
    ],
    mnemonic: 'Reunir as pessoas debaixo de um teto para consumir algo bom (comida).'
  },
  '飲む': {
    parts: [
      { char: '食', name: 'shokuhen', meaning: 'comida, comer' },
      { char: '欠', name: 'akubi', meaning: 'abrir a boca, falta' }
    ],
    mnemonic: 'Abrir amplamente a boca para ingerir um alimento líquido, bebendo.'
  },
  '見る': {
    parts: [
      { char: '目', name: 'me', meaning: 'olho' },
      { char: '儿', name: 'ninnyo', meaning: 'pernas' }
    ],
    mnemonic: 'Um olho com pernas indo ativamente a diversos lugares com o propósito de observar e ver tudo.'
  },
  '来る': {
    parts: [
      { char: '木', name: 'moku', meaning: 'árvore, madeira' },
      { char: '丷', name: 'hachi', meaning: 'trigo (no topo antigo), direção externa' }
    ],
    mnemonic: 'Uma planta que se assemelha a uma espiga de trigo que veio de longe.'
  },
  '行く': {
    parts: [
      { char: '彳', name: 'gyouninben', meaning: 'passos' },
      { char: '亍', name: 'teku', meaning: 'passos adiante' }
    ],
    mnemonic: 'Passos esquerdo e direito caminhando firmes por uma encruzilhada para ir a algum lugar.'
  },
  '帰る': {
    parts: [
      { char: '刂', name: 'ritto', meaning: 'faca, facção' },
      { char: 'ヨ', name: 'yo', meaning: 'vassoura / voltar' },
      { char: '冖', name: 'wakanmuri', meaning: 'cobertura' }
    ],
    mnemonic: 'Afastar ativamente os obstáculos para arrumar as malas e retornar em segurança para casa sob seu próprio teto.'
  },
  '入る': {
    parts: [{ char: '入', name: 'iru', meaning: 'entrar' }],
    mnemonic: 'A imagem de uma ponta de lança ou pessoa forçando a entrada, empurrando algo.'
  },
  '出る': {
    parts: [
      { char: '山', name: 'yama', meaning: 'montanha' },
      { char: '山', name: 'yama', meaning: 'montanha' }
    ],
    mnemonic: 'O formato de uma montanha encavalada sobre a outra simulando plantas saindo do chão para cima.'
  },
  '読む': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'palavras, dizer' },
      { char: '売', name: 'uru', meaning: 'vender' }
    ],
    mnemonic: 'Palavras sendo faladas como se um vendedor as anunciasse, simulando a leitura em voz alta.'
  },
  '書く': {
    parts: [
      { char: '聿', name: 'fude', meaning: 'pincel' },
      { char: '曰', name: 'etsu', meaning: 'dizer' }
    ],
    mnemonic: 'Alguém firmemente segurando um pincel e registrando o que foi dito.'
  },
  '聞く': {
    parts: [
      { char: '門', name: 'mon', meaning: 'portões' },
      { char: '耳', name: 'mimi', meaning: 'orelha' }
    ],
    mnemonic: 'Uma orelha perfeitamente pressionada no buraco do portão prestando atenção com vontade de ouvir algo ou até perguntar.'
  },
  '言う': {
    parts: [
      { char: '口', name: 'kuchi', meaning: 'boca' },
      { char: '一', name: 'ichi', meaning: 'uma (linha de som)' }
    ],
    mnemonic: 'O desenho de uma boca com ondas sonoras ou palavras escapando por cima ao dizer algo.'
  },
  '買う': {
    parts: [
      { char: '罒', name: 'amigashira', meaning: 'rede' },
      { char: '貝', name: 'kai', meaning: 'concha, dinheiro' }
    ],
    mnemonic: 'Lançar uma grande rede para reunir e obter objetos usando conchas (dinheiro da antiguidade) como forma de comprar.'
  },
  '休む': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '木', name: 'moku', meaning: 'árvore' }
    ],
    mnemonic: 'A imagem pacífica de uma pessoa que decidiu encostar no tronco de uma árvore para descansar.'
  },
  '立つ': {
    parts: [{ char: '立', name: 'tatsu', meaning: 'pôr-se de pé' }],
    mnemonic: 'O retrato de uma pessoa em pé com os dois braços caídos ao longo do corpo no chão.'
  },
  '新しい': {
    parts: [
      { char: '立', name: 'tatsu', meaning: 'em pé / pimenta' },
      { char: '木', name: 'ki', meaning: 'árvore' },
      { char: '斤', name: 'ono', meaning: 'machado' }
    ],
    mnemonic: 'Usar um machado afiado em uma grande árvore em pé para produzir madeira limpa e totalmente nova.'
  },
  '古い': {
    parts: [
      { char: '十', name: 'juu', meaning: 'dez' },
      { char: '口', name: 'kuchi', meaning: 'boca, gerações' }
    ],
    mnemonic: 'Aquilo que foi repassado através da boca ao longo de mais de dez gerações é naturalmente velho e antigo.'
  },
  '多い': {
    parts: [
      { char: '夕', name: 'yuu', meaning: 'tarde, entardecer' },
      { char: '夕', name: 'yuu', meaning: 'tarde, entardecer' }
    ],
    mnemonic: 'Empilhar incontáveis crepúsculos um em cima do outro, indicando que o tempo e a quantidade são muitos.'
  },
  '少ない': {
    parts: [
      { char: '小', name: 'shou', meaning: 'pequeno' },
      { char: '丿', name: 'no', meaning: 'marcação, divisão' }
    ],
    mnemonic: 'Tentar dividir ou cortar o que já é bem pequeno o torna extremamente pouco.'
  },
  '早い': {
    parts: [
      { char: '日', name: 'hi', meaning: 'sol' },
      { char: '十', name: 'juu', meaning: 'cem, agulha, talo' }
    ],
    mnemonic: 'O grande sol da manhã subindo acima dos talos do campo muito cedo.'
  },
  '遅い': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho, movimento' },
      { char: '犀', name: 'sai', meaning: 'rinoceronte / gado lento' }
    ],
    mnemonic: 'Fazer uma viagem caminhando sobre algo muito rústico e devagar, como se fosse atrás de gado, o que faz tudo ficar tarde e atrasado.'
  },
  '近い': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '斤', name: 'ono', meaning: 'machado' }
    ],
    mnemonic: 'Pelo caminho, você precisou cortar uma distância tão curta que precisou de apenas uma machadada para ficar perto.'
  },
  '遠い': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '袁', name: 'en', meaning: 'longa vestimenta fluida' }
    ],
    mnemonic: 'Alguém com longas roupas fluidas que vão arrastando e se alongando cada vez mais no caminho rumo a um lugar distante.'
  },
  '右': {
    parts: [
      { char: '𠂇', name: 'te', meaning: 'mão direita' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'A mão dominante direita conduzindo o alimento até a boca.'
  },
  '左': {
    parts: [
      { char: '𠂇', name: 'te', meaning: 'mão esquerda' },
      { char: '工', name: 'kou', meaning: 'ferramenta, ofício' }
    ],
    mnemonic: 'A mão esquerda apoiando e conduzindo a ferramenta durante o trabalho.'
  },
  '北': {
    parts: [
      { char: '匕', name: 'hi', meaning: 'pessoa (virada)' },
      { char: '匕', name: 'hi', meaning: 'pessoa' }
    ],
    mnemonic: 'Duas pessoas sentadas uma de costas para a outra no norte frio, evitando o vento que congela.'
  },
  '南': {
    parts: [
      { char: '十', name: 'juu', meaning: 'dez, agulha' },
      { char: '冂', name: 'keigamae', meaning: 'fronteira' },
      { char: '¥', name: 'en', meaning: 'moeda (interior variante de ovelha)' }
    ],
    mnemonic: 'A agulha da bússola apontando dentro da cerca para o sul quente e ensolarado.'
  },
  '東': {
    parts: [
      { char: '木', name: 'ki', meaning: 'árvore' },
      { char: '日', name: 'hi', meaning: 'sol' }
    ],
    mnemonic: 'O sol nascendo por trás de uma árvore indica o amanhecer no leste.'
  },
  '西': {
    parts: [
      { char: '襾', name: 'nishi', meaning: 'ninho, cobrir' },
      { char: '八', name: 'hachi', meaning: 'dividir / pernas' }
    ],
    mnemonic: 'Os pássaros voltando aos seus ninhos empoleirados quando o sol se põe no oeste.'
  },
  '前': {
    parts: [
      { char: '丷', name: 'hachi', meaning: 'chifres' },
      { char: '一', name: 'ichi', meaning: 'linha' },
      { char: '月', name: 'tsuki', meaning: 'lua / corpo' },
      { char: '刂', name: 'ritto', meaning: 'faca' }
    ],
    mnemonic: 'Preparar a faca (espada) em *frente* ao corpo antes de avançar para a batalha.'
  },
  '後ろ': {
    parts: [
      { char: '彳', name: 'gyouninben', meaning: 'passos' },
      { char: '幺', name: 'itogashira', meaning: 'fio, pequeno' },
      { char: '夂', name: 'nomofuyu', meaning: 'andar devagar' }
    ],
    mnemonic: 'Andar com passos pequenos e devagar faz você ficar muito atrás dos outros.'
  },
  '今': {
    parts: [
      { char: '𠆢', name: 'yane', meaning: 'reunir, teto' },
      { char: '一', name: 'ichi', meaning: 'um' },
      { char: 'フ', name: 'fu', meaning: 'agora (curva)' }
    ],
    mnemonic: 'Reunir todas as coisas aqui e neste exato momento presente: o "agora".'
  },
  '毎': {
    parts: [
      { char: '𠂉', name: 'kanmuri', meaning: 'pessoa (mãe deitada)' },
      { char: '母', name: 'haha', meaning: 'mãe' }
    ],
    mnemonic: 'A mãe cuidadosa sempre fazendo a mesma coisa de forma dedicada todo, *cada* dia.'
  },
  '週': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '周', name: 'shuu', meaning: 'dar a volta, ciclo' }
    ],
    mnemonic: 'O sol caminhando e dando a volta completa de 7 dias descreve uma semana.'
  },
  '朝': {
    parts: [
      { char: '十', name: 'juu', meaning: 'grama (antigamente)' },
      { char: '日', name: 'hi', meaning: 'sol' },
      { char: '月', name: 'tsuki', meaning: 'lua' }
    ],
    mnemonic: 'Aquele momento raro de manhã em que o sol já se levantou na grama, mas a lua ainda está no céu.'
  },
  '夜': {
    parts: [
      { char: '亠', name: 'nabebuta', meaning: 'cabeça, noite' },
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '夕', name: 'yuu', meaning: 'entardecer' },
      { char: '乀', name: 'migi', meaning: 'perna longa' }
    ],
    mnemonic: 'Uma pessoa estendendo totalmente sua perna para relaxar logo após o anoitecer.'
  },
  '半': {
    parts: [
      { char: '丷', name: 'hachi', meaning: 'dividir' },
      { char: '二', name: 'ni', meaning: 'dois' },
      { char: '丨', name: 'tate-bou', meaning: 'linha de corte' }
    ],
    mnemonic: 'Uma grande faca cortando as duas linhas perfeitamente pelo meio (metade).'
  },
  '何': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '可', name: 'ka', meaning: 'possível, o quê, aprovar' }
    ],
    mnemonic: 'Uma pessoa carregando uma caixa e você pergunta "O que é possível ser isso nas mãos dele?".'
  },
  '名前': {
    parts: [
      { char: '名', name: 'na', meaning: 'nome' },
      { char: '前', name: 'mae', meaning: 'antes, frente' }
    ],
    mnemonic: 'No Japão, o "nome" que você escreve e chama é falado sempre *antes* (a frente) de qualquer título.'
  },
  '友達': {
    parts: [
      { char: '友', name: 'tomo', meaning: 'amigo' },
      { char: '達', name: 'tachi', meaning: 'plural, alcançar' }
    ],
    mnemonic: 'Diversos amigos caminhando juntos lado a lado para alcançar seus sonhos (plural de amigos).'
  },
  '安全': {
    parts: [
      { char: '安', name: 'an', meaning: 'paz, calmo' },
      { char: '全', name: 'zen', meaning: 'completo, todo' }
    ],
    mnemonic: 'Uma mulher debaixo do teto protegida traz "paz" e o rei debaixo do teto é "total", a união é "segurança".'
  },
  '高校': {
    parts: [
      { char: '高', name: 'kou', meaning: 'alto' },
      { char: '校', name: 'kou', meaning: 'escola' }
    ],
    mnemonic: 'A escola de nível mais alto onde os adolescentes estudam para a faculdade.'
  },
  '図書館': {
    parts: [
      { char: '図', name: 'to', meaning: 'diagrama, mapa' },
      { char: '書', name: 'sho', meaning: 'escrever' },
      { char: '館', name: 'kan', meaning: 'salão, prédio' }
    ],
    mnemonic: 'O grande edifício (salão) feito especialmente para armazenar diagramas e escritos.'
  },
  '勉強': {
    parts: [
      { char: '勉', name: 'ben', meaning: 'esforço, trabalho duro' },
      { char: '強', name: 'kyou', meaning: 'forte' }
    ],
    mnemonic: 'Somente se esforçando muito e usando força de vontade você consegue "estudar" com consistência.'
  },
  '仕事': {
    parts: [
      { char: '仕', name: 'shi', meaning: 'servir, fazer' },
      { char: '事', name: 'goto', meaning: 'coisa, assunto, tarefa' }
    ],
    mnemonic: 'Servir a sociedade fazendo tarefas e prestando serviços configura um "trabalho".'
  },
  '電車': {
    parts: [
      { char: '電', name: 'den', meaning: 'eletricidade' },
      { char: '車', name: 'sha', meaning: 'veículo' }
    ],
    mnemonic: 'O veículo comprido e com muitos vagões movido a eletricidade (trem).'
  },
  '病院': {
    parts: [
      { char: '病', name: 'byou', meaning: 'doente' },
      { char: '院', name: 'in', meaning: 'instituição, pátio' }
    ],
    mnemonic: 'A grande instituição oficial de saúde desenhada para acolher as pessoas doentes.'
  },
  '思う': {
    parts: [
      { char: '田', name: 'ta', meaning: 'campo móvel / cérebro' },
      { char: '心', name: 'kokoro', meaning: 'coração' }
    ],
    mnemonic: 'Os antigos japoneses acreditavam que processar algo no cérebro e no coração representava "pensar".'
  },
  '知る': {
    parts: [
      { char: '矢', name: 'ya', meaning: 'flecha' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'O conhecimento dispara de forma rápida e certeira como uma flecha saindo da boca de quem ensina.'
  },
  '作る': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '乍', name: 'nagara', meaning: 'fazer enquanto, serrote' }
    ],
    mnemonic: 'Uma pessoa serrando e batendo coisas simultaneamente para construir ou "fazer" um objeto.'
  },
  '教える': {
    parts: [
      { char: '孝', name: 'kou', meaning: 'piedade filial, aprender' },
      { char: '攵', name: 'bokuzukuri', meaning: 'bater levemente, instruir' }
    ],
    mnemonic: 'Um instrutor dando tapinhas encorajadores nas costas de um pequeno aluno aprendendo.'
  },
  '開ける': {
    parts: [
      { char: '門', name: 'mon', meaning: 'portão' },
      { char: '干', name: 'kan', meaning: 'puxar, secar, escudo' }
    ],
    mnemonic: 'Pegar o ferrolho ou as duas abas espessas do portão puxando para deixá-lo "aberto".'
  },
  '閉める': {
    parts: [
      { char: '門', name: 'mon', meaning: 'portão' },
      { char: '才', name: 'sai', meaning: 'tranca de madeira' }
    ],
    mnemonic: 'Pegar uma grande peça de madeira em formato de pino e atravessar no portão para deixá-lo "fechado".'
  },
  '待つ': {
    parts: [
      { char: '彳', name: 'gyouninben', meaning: 'passos, caminho' },
      { char: '寺', name: 'tera', meaning: 'templo' }
    ],
    mnemonic: 'Parar os passos na entrada de um templo sagrado para "esperar" pacientemente o monge.'
  },
  '持つ': {
    parts: [
      { char: '扌', name: 'tehen', meaning: 'mão' },
      { char: '寺', name: 'tera', meaning: 'templo' }
    ],
    mnemonic: 'Os monges tinham a mão sobre todos os relógios (marcadores de tempo), "tendo" ou segurando coisas preciosas.'
  },
  '使う': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '吏', name: 'ri', meaning: 'oficial, mensageiro' }
    ],
    mnemonic: 'O ato de uma pessoa despachar um oficial para "usar" os serviços da prefeitura.'
  },
  '送る': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '关', name: 'sou', meaning: 'rir, tocha (variante)' }
    ],
    mnemonic: 'Para "enviar" a mensagem ou o mensageiro pelo caminho, eles seguram uma grande tocha.'
  },
  '着く': {
    parts: [
      { char: '羊', name: 'hitsuji', meaning: 'ovelha' },
      { char: '目', name: 'me', meaning: 'olho' }
    ],
    mnemonic: 'O pastor vestindo lã de ovelha (roupas) e usando os olhos para ver se a ovelha "chega" ao pasto.'
  },
  '走る': {
    parts: [
      { char: '土', name: 'tsuchi', meaning: 'terra, chão' },
      { char: '疋', name: 'hiki', meaning: 'pé em ação' }
    ],
    mnemonic: 'A imagem de uma pessoa avançando com o pé no chão aterrorizada (como se estivesse pisando), correndo.'
  },
  '売る': {
    parts: [
      { char: '士', name: 'shi', meaning: 'guerreiro, intelectual' },
      { char: '冖', name: 'wakanmuri', meaning: 'teto' },
      { char: '儿', name: 'ninnyo', meaning: 'pernas' }
    ],
    mnemonic: 'Aquele guerreiro sob o teto da tenda mostrando suas coisas aos passantes (pernas) para "vender".'
  },
  '借りる': {
    parts: [
      { char: '亻', name: 'ninben', meaning: 'pessoa' },
      { char: '昔', name: 'mukashi', meaning: 'antiguidade, tempo longo' }
    ],
    mnemonic: 'Uma pessoa que pediu algo emprestado por um bom e longo tempo desde as eras antigas.'
  },
  '切る': {
    parts: [
      { char: '七', name: 'shichi', meaning: 'sete (modificado p/ corte)' },
      { char: '刀', name: 'katana', meaning: 'espada, faca' }
    ],
    mnemonic: 'Sete poderosos e rápidos golpes seguidos feitos usando uma faca afiada para "cortar" algo.'
  },
  '広い': {
    parts: [
      { char: '广', name: 'madare', meaning: 'salão espaçoso, caverna' },
      { char: 'ム', name: 'mu', meaning: 'privado / cotovelo' }
    ],
    mnemonic: 'Um salão gigante onde você pode esticar os dois cotovelos completamente porque é mito *espaçoso*.'
  },
  '強い': {
    parts: [
      { char: '弓', name: 'yumi', meaning: 'arco' },
      { char: 'ム', name: 'mu', meaning: 'cotovelo, dobrar' },
      { char: '虫', name: 'mushi', meaning: 'inseto (antigo cavalo)' }
    ],
    mnemonic: 'Um arco flexível puxado pelo cotovelo do guerreiro com uma destreza de inseto é extremamente "forte".'
  },
  '弱い': {
    parts: [
      { char: '弓', name: 'yumi', meaning: 'arco' },
      { char: '彡', name: 'san-zukuri', meaning: 'pelos / asas pequenas' }
    ],
    mnemonic: 'Dois (repetidos) arcos extremamente minúsculos e flexíveis igual penas que atiram sem impacto, muito fracos.'
  },
  '正しい': {
    parts: [
      { char: '一', name: 'ichi', meaning: 'um (linha de chegada)' },
      { char: '止', name: 'tomeru', meaning: 'parar, pisada' }
    ],
    mnemonic: 'Pisar perfeitamente na linha reta da moral, da verdade, a conduta correta na sociedade.'
  },
  '家': {
    parts: [
      { char: '宀', name: 'ukanmuri', meaning: 'teto' },
      { char: '豕', name: 'inoko', meaning: 'porco' }
    ],
    mnemonic: 'Antigamente, você tinha que morar sob um teto tendo um porco criado na cozinha para manter a "casa" e o lar.'
  },
  '地': {
    parts: [
      { char: '土', name: 'tsuchi', meaning: 'terra' },
      { char: '也', name: 'ya', meaning: 'escorpião / espalhar' }
    ],
    mnemonic: 'A imagem da terra se espalhando horizontalmente e verticalmente como uma cordilheira até onde a vista alcança (solo/lugar).'
  },
  '工': {
    parts: [{ char: '工', name: 'kou', meaning: 'pilar de sustentação, trabalho' }],
    mnemonic: 'Um pilar erguido no chão para sustentar o teto. Símbolo do construtor e engenheiro de obras.'
  },
  '自': {
    parts: [{ char: '自', name: 'ji', meaning: 'nariz, o próprio' }],
    mnemonic: 'Um close do nariz em uma face. No Japão como no oriente, apontar pro nariz significa "Eu próprio".'
  },
  '世': {
    parts: [{ char: '世', name: 'se', meaning: 'mundo, geração' }],
    mnemonic: 'A junção e ramificação de 3 cruzes (trinta) indicando um período normal de trinta anos para repassar as coisas ao globo: uma geração.'
  },
  '運': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '軍', name: 'gun', meaning: 'exército / carruagem com teto (車+冖)' }
    ],
    mnemonic: 'Movimentar imensos exércitos caminhando do oriente para cá "transportando" coisas. Requer muita sorte militar.'
  },
  '転': {
    parts: [
      { char: '車', name: 'kuruma', meaning: 'carro, veículo' },
      { char: '云', name: 'iu', meaning: 'nuvem (rodopiando)' }
    ],
    mnemonic: 'Um carro no qual a roda está rodopiando tão ferozmente que parece rodar, rolar e girar igual uma nuvem solta e transferir o veículo.'
  },
  '色': {
    parts: [
      { char: 'ク', name: 'ku', meaning: 'vínculo, segurar (topo)' },
      { char: '巴', name: 'tomoe', meaning: 'cauda chata / corpo humano' }
    ],
    mnemonic: 'Historicamente o blush e a maquiagem para colorir o corpo era aplicado pelas pessoas. A fisionomia de rosto colorido, a cor.'
  },
  '同': {
    parts: [
      { char: '冂', name: 'keigamae', meaning: 'contorno externo / tampa' },
      { char: '一', name: 'ichi', meaning: 'um' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'Toda a caixa tendo "uma mesma boca", uma mesma regra e um mesmo compasso para estar harmonioso (igual).'
  },
  '場': {
    parts: [
      { char: '土', name: 'tsuchi', meaning: 'terra' },
      { char: '昜', name: 'you', meaning: 'sol brilhante, local amplo' }
    ],
    mnemonic: 'A imagem de uma grande terra ou praça onde os fortes raios de sol brilham (como um estádio): um local.'
  },
  '所': {
    parts: [
      { char: '戸', name: 'ko', meaning: 'porta, aba' },
      { char: '斤', name: 'ono', meaning: 'machado' }
    ],
    mnemonic: 'O "local" específico na casa (perto da porta) onde fica protegido ou erguido o pesado machado.'
  },
  '死': {
    parts: [
      { char: '歹', name: 'gatsuhen', meaning: 'ossos pélvicos, morte' },
      { char: '匕', name: 'hi', meaning: 'pessoa ajoelhada, cauda' }
    ],
    mnemonic: 'O lamentável instante onde restam apenas restos mortais (ossos) ao lado de uma pessoa prostrada no chão, indicando a morte.'
  },
  '通': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '甬', name: 'you', meaning: 'tubo, caminho cilíndrico' }
    ],
    mnemonic: 'Passar por caminhos e vias expressas (como que fluindo por um grande túnel e tubo sem bloqueios), ir pelo trajeto.'
  },
  '考える': {
    parts: [
      { char: '老', name: 'oi', meaning: 'velho (topo modificado)' },
      { char: '丂', name: 'kou', meaning: 'bengala, ar superior' }
    ],
    mnemonic: 'Um mestre ancião velho inclinado e amparado em sua bengala focando toda a sua experiência do ambiente em uma profunda reflexão e reflexão em pensamento.'
  },
  '届ける': {
    parts: [
      { char: '尸', name: 'shikabane', meaning: 'telhado envergado' },
      { char: '由', name: 'yuu', meaning: 'brotar, chegar na ponta' }
    ],
    mnemonic: 'Chegar na varanda, sob uma abóbada com os documentos. Deixar despontar a sua chegada, uma encomenda ou pedido (notificando).'
  },

  // ─── N3 KANJIS (1-30) ───
  '明るい': {
    parts: [
      { char: '日', name: 'hi', meaning: 'sol' },
      { char: '月', name: 'tsuki', meaning: 'lua' }
    ],
    mnemonic: 'Quando o sol e a lua aparecem juntos no céu, a claridade é total, o lugar fica muito "claro" e iluminado.'
  },
  '悪い': {
    parts: [
      { char: '亜', name: 'a', meaning: 'subordinado, deformado' },
      { char: '心', name: 'kokoro', meaning: 'coração' }
    ],
    mnemonic: 'Um coração deformado ou desvirtuado que só consegue emitir energias "ruins".'
  },
  '意味': {
    parts: [
      { char: '意', name: 'i', meaning: 'intenção, ideia' },
      { char: '味', name: 'mi', meaning: 'sabor, gosto' }
    ],
    mnemonic: 'Aquele "sabor e sentido" escondido por trás das palavras traz o significado real da ação.'
  },
  '運動': {
    parts: [
      { char: '運', name: 'un', meaning: 'transportar, sorte' },
      { char: '動', name: 'dou', meaning: 'movimento, agir' }
    ],
    mnemonic: 'A junção entre mover as suas pernas e transportar ativamente o seu corpo que constitui o exercício físico.'
  },
  '映画': {
    parts: [
      { char: '映', name: 'ei', meaning: 'refletir' },
      { char: '画', name: 'ga', meaning: 'figura, pintura' }
    ],
    mnemonic: 'As figuras (pinturas) sendo ativamente "refletidas" e projetadas na grande tela formam um filme no cinema.'
  },
  '音楽': {
    parts: [
      { char: '音', name: 'on', meaning: 'som' },
      { char: '楽', name: 'gaku', meaning: 'divertido, conforto' }
    ],
    mnemonic: 'Sons muito bonitos que produzem diversão e alegria genuína aos nossos ouvidos: a "música".'
  },
  '感じ': {
    parts: [
      { char: '感', name: 'kan', meaning: 'emoção, sentir' }
    ],
    mnemonic: 'A parte de baixo (心) é o coração, que reage aos sentimentos fortes transmitindo a "sensação".'
  },
  '急ぐ': {
    parts: [
      { char: 'ク', name: 'ku', meaning: 'dobrar-se' },
      { char: 'ヨ', name: 'keigamae', meaning: 'cabeça do porco (variante)' },
      { char: '心', name: 'kokoro', meaning: 'coração' }
    ],
    mnemonic: 'Seu coração desabalado e suado como uma fera querendo apressar as coisas rapidamente.'
  },
  '好き': {
    parts: [
      { char: '女', name: 'onna', meaning: 'mulher' },
      { char: '子', name: 'ko', meaning: 'criança' }
    ],
    mnemonic: 'A cena calorosa de uma mulher abraçando forte sua criança representa a afeição de "gostar" de alguém.'
  },
  '心配': {
    parts: [
      { char: '心', name: 'shin', meaning: 'coração' },
      { char: '配', name: 'hai', meaning: 'distribuir, entregar' }
    ],
    mnemonic: 'Gastar e ceder um pouco da energia do nosso próprio coração em consideração e preocupação por outra pessoa.'
  },
  '始める': {
    parts: [
      { char: '女', name: 'onna', meaning: 'mulher' },
      { char: '台', name: 'dai', meaning: 'plataforma, pedestal' }
    ],
    mnemonic: 'Na antiguidade, a filha primogênita subindo ao pedestal do altar para "começar" o festival sagrado da casa.'
  },
  '勝つ': {
    parts: [
      { char: '月', name: 'tsuki', meaning: 'carne, corpo' },
      { char: '券', name: 'tsutsumi', meaning: 'enrolar, bilhete / força' }
    ],
    mnemonic: 'Usar intensamente o seu corpo com a força das duas mãos no topo para prevalecer aos outros e vencer a luta.'
  },
  '色々': {
    parts: [
      { char: '色', name: 'iro', meaning: 'cor' }
    ],
    mnemonic: 'Um espectro muito longo com todas as cores do arco-íris, significando algo diverso e múltiplo.'
  },
  '集める': {
    parts: [
      { char: '隹', name: 'furutori', meaning: 'pássaro antigo' },
      { char: '木', name: 'moku', meaning: 'árvore' }
    ],
    mnemonic: 'Muitos passarinhos piando felizes escolhendo se "reunir" e sentar nos mesmos galhos de uma grande árvore.'
  },
  '重い': {
    parts: [
      { char: '千', name: 'sen', meaning: 'mil' },
      { char: '里', name: 'sato', meaning: 'vila, campo, peso' }
    ],
    mnemonic: 'Alguém que precisa carregar algo valendo mais de mil moedas de bronze por muitas léguas pela vila: vai ficar muito "pesado".'
  },
  '春': {
    parts: [
      { char: '三', name: 'san', meaning: 'três, raios de sol abundantes' },
      { char: '人', name: 'hito', meaning: 'pessoa (espalhado)' },
      { char: '日', name: 'hi', meaning: 'sol' }
    ],
    mnemonic: 'O tempo onde após o inverno congelante, o esplendoroso sol acorda para brilhar sob a relva, florescendo a "primavera".'
  },
  '転ぶ': {
    parts: [
      { char: '車', name: 'kuruma', meaning: 'carro' },
      { char: '云', name: 'iu', meaning: 'nuvem, rodopiar' }
    ],
    mnemonic: 'O carro que derrapa fora de controle rodopiando feito nuvem e tomba capotando no meio da estrada.'
  },
  '通る': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '甬', name: 'you', meaning: 'túnel, tubo' }
    ],
    mnemonic: 'Atravessar caminhando pelo tubo aberto (um grande túnel limpo), tendo licença para "passar".'
  },
  '特別': {
    parts: [
      { char: '特', name: 'toku', meaning: 'especial, touro' },
      { char: '別', name: 'betsu', meaning: 'separar' }
    ],
    mnemonic: 'Naquela vila separaram um grande e majestoso boi (vaca/touro) no templo porque aquilo era algo super "especial".'
  },
  '難しい': {
    parts: [
      { char: '堇', name: 'kin', meaning: 'homem secando algo no fogo (sofrimento)' },
      { char: '隹', name: 'furutori', meaning: 'pássaro pequeno' }
    ],
    mnemonic: 'Um pássaro assustado diante do longo sofrimento da seca tenta decolar no fogo, descobrindo que seria incrivelmente "difícil".'
  },
  '熱い': {
    parts: [
      { char: '埶', name: 'gei', meaning: 'esforço, agilidade' },
      { char: '灬', name: 'rekka', meaning: 'fogo' }
    ],
    mnemonic: 'Um exército empunhando tochas muito perigosas e fogos por baixo se esforçando ao máximo; está muito "quente".'
  },
  '病気': {
    parts: [
      { char: '疒', name: 'yamaidare', meaning: 'doença, cama de doente' },
      { char: '気', name: 'ki', meaning: 'energia' }
    ],
    mnemonic: 'A energia interna (気) está enfraquecida deixando o corpo forçosamente na cama sofrendo o cansaço da "doença".'
  },
  '服': {
    parts: [
      { char: '月', name: 'tsuki', meaning: 'corpo, carne' },
      { char: '卩', name: 'fushizukuri', meaning: 'selo' },
      { char: '又', name: 'mata', meaning: 'fazer dinamicamente' }
    ],
    mnemonic: 'O ofício de medir e costurar selando perfeitamente os tecidos rentes ao corpo humano. O resultado são as "roupas".'
  },
  '物語': {
    parts: [
      { char: '物', name: 'mono', meaning: 'coisa' },
      { char: '語', name: 'go', meaning: 'fala, conto' }
    ],
    mnemonic: 'Toda narrativa fantástica e história épica contada pelas pessoas desde os primórdios (uma história e conto).'
  },
  '有名': {
    parts: [
      { char: '有', name: 'yuu', meaning: 'possuir, ter' },
      { char: '名', name: 'mei', meaning: 'nome' }
    ],
    mnemonic: 'Quando a figura de alguém tem grande alcance possuindo um grandioso "nome", ela se consagra como celebridade (famoso).'
  },
  '理由': {
    parts: [
      { char: '理', name: 'ri', meaning: 'lógica, arranjo das joias' },
      { char: '由', name: 'yuu', meaning: 'brotar dali, causa original' }
    ],
    mnemonic: 'Encontrar com exatidão onde e por onde brotou logicamente toda aquela situação é descobrir o "motivo e razão".'
  },
  '力': {
    parts: [{ char: '力', name: 'chikara', meaning: 'força' }],
    mnemonic: 'O desenho de um braço musculoso de um homem fletindo os músculos até inchar as veias (esbanjando muita força).'
  },
  '全部': {
    parts: [
      { char: '全', name: 'zen', meaning: 'todo, completo' },
      { char: '部', name: 'bu', meaning: 'parte, seção' }
    ],
    mnemonic: 'Reunir *todas as partes* formando uma coisa única constitui o "todo" ou a totalidade.'
  },
  '努力': {
    parts: [
      { char: '努', name: 'do', meaning: 'esforçar-se' },
      { char: '力', name: 'ryoku', meaning: 'força' }
    ],
    mnemonic: 'A mulher que usa grande força e flexiona os músculos incessantemente se "esforça" de verdade.'
  },
  '親切': {
    parts: [
      { char: '親', name: 'shin', meaning: 'íntimo, pais' },
      { char: '切', name: 'setsu', meaning: 'cortar / urgente' }
    ],
    mnemonic: 'No Japão rural, cortar a comida para dar e cuidar de perto dos seus pais representava a maior gentileza e bondade.'
  },
  '安心': {
    parts: [
      { char: '安', name: 'an', meaning: 'paz, sossego' },
      { char: '心', name: 'shin', meaning: 'coração' }
    ],
    mnemonic: 'A mulher a salvo debaixo do telhado sente que seu coração bate com muita tranquilidade e "alívio".'
  },
  '記念': {
    parts: [
      { char: '記', name: 'ki', meaning: 'anotar, narrar' },
      { char: '念', name: 'nen', meaning: 'pensamento, desejo' }
    ],
    mnemonic: 'Anotar os pensamentos em palavras ao longo das eras para registrar algo monumental na "memória" de todos.'
  },
  '合う': {
    parts: [
      { char: '人', name: 'yane', meaning: 'reunir, tampo' },
      { char: '一', name: 'ichi', meaning: 'um' },
      { char: '口', name: 'kuchi', meaning: 'boca' }
    ],
    mnemonic: 'Reunir todas as pessoas para falarem com a mesma (uma) boca, tudo se encaixa e as vozes "combinam".'
  },
  '都合': {
    parts: [
      { char: '都', name: 'tsu', meaning: 'capital, metrópole' },
      { char: '合', name: 'gou', meaning: 'combinar, servir' }
    ],
    mnemonic: 'Na antiguidade as coisas combinavam ou convergiam perfeitamente bem ao ir em direção à metrópole (conveniência).'
  },
  '足りる': {
    parts: [
      { char: '口', name: 'kuchi', meaning: 'boca / canela' },
      { char: '止', name: 'tomeru', meaning: 'parar, pisar' }
    ],
    mnemonic: 'O "pé" inteiro que pisa no chão. Terminar caminhadas e acrescentar sempre passos para tornar tudo "suficiente".'
  },
  '消える': {
    parts: [
      { char: '氵', name: 'sanzui', meaning: 'água' },
      { char: '肖', name: 'shou', meaning: 'semelhança, pequeno / faísca' }
    ],
    mnemonic: 'A água derramada sobre uma pequena e semelhante faísca causando o vapor extinguir e "desaparecer" com suas chamas.'
  },
  '経験': {
    parts: [
      { char: '経', name: 'kei', meaning: 'fios, percorrer, sutras' },
      { char: '験', name: 'ken', meaning: 'teste, cavalo' }
    ],
    mnemonic: 'Percorrer milhares de fios e testar seu cavalo incansáveis vezes para obter algo muito valioso: sua "experiência".'
  },
  '決める': {
    parts: [
      { char: '氵', name: 'sanzui', meaning: 'água' },
      { char: '夬', name: 'kai', meaning: 'quebrar, decidir' }
    ],
    mnemonic: 'Uma grande encharcada de água rompendo um dique subitamente sem volta; o conceito imutável de "decidir".'
  },
  '変わる': {
    parts: [
      { char: '亦', name: 'eki', meaning: 'axilas (variação colorida), rastros' },
      { char: '攵', name: 'bokuzukuri', meaning: 'ação, golpear, agir' }
    ],
    mnemonic: 'Agir com as mãos incessantemente moldando a argila ou pintando com cores até finalmente a transmutar e "mudar".'
  },
  '調べる': {
    parts: [
      { char: '言', name: 'gonben', meaning: 'palavras' },
      { char: '周', name: 'shuu', meaning: 'dar a volta, completo' }
    ],
    mnemonic: 'Dar a volta completa lançando palavras e perguntas a todas as testemunhas a sua volta enquanto estuda e "investiga".'
  },
  '選ぶ': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '巽', name: 'son', meaning: 'dois suportes/selos' }
    ],
    mnemonic: 'Viajando pelo caminho você se depara com dois caminhos e tem que selar a escolha de um deles: "escolher".'
  },
  '受ける': {
    parts: [
      { char: '爫', name: 'tsumekanmuri', meaning: 'garras, mão de cima' },
      { char: '冖', name: 'wakanmuri', meaning: 'cobertura' },
      { char: '又', name: 'mata', meaning: 'mão direita, de baixo' }
    ],
    mnemonic: 'Duas mãos, sendo uma por cima entregando algo na cobertura enquanto a de baixo se estica para "receber".'
  },
  '残る': {
    parts: [
      { char: '歹', name: 'gatsuhen', meaning: 'ossos pélvicos, morte' },
      { char: '戔', name: 'san', meaning: 'lanças afiadas empilhadas' }
    ],
    mnemonic: 'Tudo o que restou e "sobrou" da violenta batalha foram ossos despedaçados e cruéis pilhas de lanças (o saldo e os restos).'
  },
  '払う': {
    parts: [
      { char: '扌', name: 'tehen', meaning: 'mão' },
      { char: 'ム', name: 'mu', meaning: 'cotovelo, particular, torção' }
    ],
    mnemonic: 'A mão empunhando, balançando em formato torcido para espanar a poeira, ou largando o dinheiro de sua mão ("pagar").'
  },
  '必要': {
    parts: [
      { char: '必', name: 'hitsu', meaning: 'completamente, fatal' },
      { char: '要', name: 'you', meaning: 'pivotar, amarrar a cintura' }
    ],
    mnemonic: 'Seu coração perigosamente perfurado significa algo tão fatal que você aperta o pivô na barriga afirmando ser de necessidade "essencial".'
  },
  '深い': {
    parts: [
      { char: '氵', name: 'sanzui', meaning: 'água' },
      { char: '穴', name: 'ana', meaning: 'caverna, buraco' },
      { char: '木', name: 'ki', meaning: 'árvore (lenha sendo explorada)' }
    ],
    mnemonic: 'Uma grande expedição no meio do buraco de uma caverna em busca de água onde as árvores já sumiram e lá no fundo escuro é "profundo".'
  },
  '若い': {
    parts: [
      { char: '艹', name: 'kusakanmuri', meaning: 'flor, grama' },
      { char: '右', name: 'migi', meaning: 'direita' }
    ],
    mnemonic: 'Uma direita que está flexível e esguia alcançando e brotando como ramos de grama, simbolizando algo vívido e "jovem".'
  },
  '危ない': {
    parts: [
      { char: '厄', name: 'yaku', meaning: 'infortúnio, penhasco' },
      { char: '卩', name: 'fushizukuri', meaning: 'pessoa ajoelhada' }
    ],
    mnemonic: 'Ajoelhar-se trêmulo na beira de um grande penhasco sentindo que está correndo um enorme "perigo".'
  },
  '込む': {
    parts: [
      { char: '辶', name: 'shinnyou', meaning: 'caminho' },
      { char: '入', name: 'iru', meaning: 'entrar' }
    ],
    mnemonic: 'Entrar pelo caminho forçadamente até o ponto do lugar ficar totalmente cheio e "abarrotado".'
  },
  '比べる': {
    parts: [{ char: '比', name: 'hi', meaning: 'comparar, enfileirar' }],
    mnemonic: 'Duas pessoas sentadas uma ao lado da outra perfeitamente alinhadas para os avaliadores poderem julgar e "comparar".'
  },
  '続ける': {
    parts: [
      { char: '糸', name: 'itohen', meaning: 'fio, linha' },
      { char: '売', name: 'uru', meaning: 'vender' }
    ],
    mnemonic: 'O vendedor habilidoso puxando o longo fio da conversa ininterruptamente para conseguir efetuar uma venda ("continuar").'
  },
  '交通': {
    parts: [
      { char: '交', name: 'kou', meaning: 'cruzar, misturar' },
      { char: '通', name: 'tsuu', meaning: 'passar, ir' }
    ],
    mnemonic: 'Pessoas e veículos que passam indo e cruzando as avenidas todos os dias formam o "tráfego".'
  },
  '経済': {
    parts: [
      { char: '経', name: 'kei', meaning: 'gerir, fios, passar' },
      { char: '済', name: 'zai', meaning: 'assentar, terminar com água' }
    ],
    mnemonic: 'Gerir com sabedoria as coisas (fios e tecidos) para assentar os devedores e a água suja e limpar as dívidas de uma "economia".'
  },
  '技術': {
    parts: [
      { char: '技', name: 'gi', meaning: 'habilidade, dedilhar' },
      { char: '術', name: 'jutsu', meaning: 'método, arte' }
    ],
    mnemonic: 'A mão (扌) e a destreza dominando a arte pelo caminho (彳) se desenvolve no mestre de ofícios como sua "tecnologia e técnica".'
  },
  '関係': {
    parts: [
      { char: '関', name: 'kan', meaning: 'conexão, portão' },
      { char: '係', name: 'kei', meaning: 'atar, conexão pessoal' }
    ],
    mnemonic: 'O porteiro na guarita e os fios atados entre o líder da tropa formam uma intrínseca teia de "relações".'
  },
  '相談': {
    parts: [
      { char: '相', name: 'sou', meaning: 'mútuo, árvore e olho' },
      { char: '談', name: 'dan', meaning: 'conversar, fala fervorosa' }
    ],
    mnemonic: 'Ficar debaixo da árvore olhando mutuamente nos olhos um do outro com fala e chamas na discussão resulta em um sério "conselho" ou consulta.'
  },
  '準備': {
    parts: [
      { char: '準', name: 'jun', meaning: 'nível de água, padrão' },
      { char: '備', name: 'bi', meaning: 'equipar, preparar material' }
    ],
    mnemonic: 'Padronizar pelo nível da água dez ervas para estofar a sela da pessoa montada no penhasco é uma grande "preparação".'
  },
  '約束': {
    parts: [
      { char: '約', name: 'yaku', meaning: 'promessa, nó em fio' },
      { char: '束', name: 'soku', meaning: 'amarrar um feixe, atar em volta' }
    ],
    mnemonic: 'Usar fios de tecido trançado enlaçados e um cinto na cintura atado em forma redonda de corda apertada amarra uma importante "promessa".'
  },
  '確認': {
    parts: [
      { char: '確', name: 'kaku', meaning: 'certeza, pássaro na pedra' },
      { char: '認', name: 'nin', meaning: 'reconhecer, aturar a fala' }
    ],
    mnemonic: 'O peso da pedra é certeza. Assumir que as palavras do pássaro na pedra e uma lâmina afiada sob o coração são indícios para se "provar ou confirmar".'
  },
  '政治': {
    parts: [
      { char: '政', name: 'sei', meaning: 'política, bater reto' },
      { char: '治', name: 'ji', meaning: 'governar, curar água' }
    ],
    mnemonic: 'Golpear e forçar os subordinados a andarem no caminho reto enquanto cura a inundação nas bases (com leis e governo formam "política").'
  },
  '文化': {
    parts: [
      { char: '文', name: 'bun', meaning: 'literatura, escrita' },
      { char: '化', name: 'ka', meaning: 'transformação, pessoa morta' }
    ],
    mnemonic: 'As antigas escrituras mudaram e transformaram a história em tradição da sabedoria humana em prol de sua própria "cultura".'
  },
  '自然': {
    parts: [
      { char: '自', name: 'shi', meaning: 'si próprio, origem (ex. um nariz)' },
      { char: '然', name: 'zen', meaning: 'assim também é (cão no fogo)' }
    ],
    mnemonic: 'Criar-se de si próprio sendo como é. Carne ou cão sobre o fogo indicava aceitação (assim é). Assim como a "natureza".'
  },
  '環境': {
    parts: [
      { char: '環', name: 'kan', meaning: 'rei e anel circular' },
      { char: '境', name: 'kyou', meaning: 'fronteira na terra, espelho' }
    ],
    mnemonic: 'O anel dos reis que orbita de maneira completa delineando as fronteiras geográficas entre som e luz ditando nosso "ambiente".'
  },
  '将来': {
    parts: [
      { char: '将', name: 'shou', meaning: 'general, logo a frente' },
      { char: '来', name: 'rai', meaning: 'vir' }
    ],
    mnemonic: 'Como o poderoso general avista adiante sob o sol se os reforços virão e chegarão, as previsões sobre tudo o que "virá" em um breve "futuro".'
  },
  '説明': {
    parts: [
      { char: '説', name: 'setsu', meaning: 'explicar, opinar' },
      { char: '明', name: 'mei', meaning: 'brilhante, claro' }
    ],
    mnemonic: 'Na antiguidade as palavras trocadas com alegria com seu amigo e sol junto à lua nos levão ao lado "brilhante e claro" ou uma brilhante clarificação e "explicação".'
  }
};
