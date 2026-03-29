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
  "一": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um"
      }
    ],
    "mnemonic": "Uma única linha horizontal representa o número um.",
    "parts_en": [
      "Ground"
    ],
    "meanings_en": [
      "One"
    ],
    "mnemonic_en": "A pictograph of a one line."
  },
  "二": {
    "parts": [
      {
        "char": "二",
        "name": "ni",
        "meaning": "dois"
      }
    ],
    "mnemonic": "Duas linhas horizontais representam o número dois.",
    "parts_en": [
      "Two"
    ],
    "meanings_en": [
      "Two"
    ],
    "mnemonic_en": "A pictograph of two lines."
  },
  "三": {
    "parts": [
      {
        "char": "三",
        "name": "san",
        "meaning": "três"
      }
    ],
    "mnemonic": "Três linhas horizontais representam o número três.",
    "parts_en": [
      "Ground",
      "Two"
    ],
    "meanings_en": [
      "Three"
    ],
    "mnemonic_en": "A pictograph of three lines."
  },
  "四": {
    "parts": [
      {
        "char": "囗",
        "name": "kuni-gamae",
        "meaning": "caixa, contorno"
      },
      {
        "char": "八",
        "name": "hachi",
        "meaning": "oito / dividir"
      }
    ],
    "mnemonic": "Um quadrado com coisas sendo divididas dentro. Quatro lados formando uma caixa.",
    "parts_en": [
      "Mouth",
      "Legs"
    ],
    "meanings_en": [
      "Four"
    ],
    "mnemonic_en": ""
  },
  "五": {
    "parts": [
      {
        "char": "二",
        "name": "ni",
        "meaning": "dois"
      },
      {
        "char": "丨",
        "name": "tate-bou",
        "meaning": "linha vertical"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um (base)"
      }
    ],
    "mnemonic": "Linhas que se cruzam conectando o céu e a terra, representando o número 5 usando a mão inteira.",
    "parts_en": [
      "Five"
    ],
    "meanings_en": [
      "Five"
    ],
    "mnemonic_en": "It has five lines. It looks like a 5. It's a five."
  },
  "六": {
    "parts": [
      {
        "char": "亠",
        "name": "nabebuta",
        "meaning": "tampa"
      },
      {
        "char": "八",
        "name": "hachi",
        "meaning": "oito / pernas"
      }
    ],
    "mnemonic": "Uma tampa sobre duas pernas. Um animalzinho de 6 pernas coberto.",
    "parts_en": [
      "Lid",
      "Fins"
    ],
    "meanings_en": [
      "Six"
    ],
    "mnemonic_en": ""
  },
  "七": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um (horizontal)"
      },
      {
        "char": "乚",
        "name": "magari",
        "meaning": "anzol"
      }
    ],
    "mnemonic": "Uma linha sendo cortada torta, como o número 7 virado de cabeça para baixo.",
    "parts_en": [
      "Seven"
    ],
    "meanings_en": [
      "Seven"
    ],
    "mnemonic_en": "If you flip it upside-down and left-to-right it looks like a seven."
  },
  "八": {
    "parts": [
      {
        "char": "八",
        "name": "hachi",
        "meaning": "oito, dividir"
      }
    ],
    "mnemonic": "Duas linhas se separando (dividindo), indicando os oito pontos cardeais.",
    "parts_en": [
      "Fins"
    ],
    "meanings_en": [
      "Eight"
    ],
    "mnemonic_en": ""
  },
  "九": {
    "parts": [
      {
        "char": "丿",
        "name": "no",
        "meaning": "linha curva (esquerda)"
      },
      {
        "char": "乙",
        "name": "otsu",
        "meaning": "gancho em formato de Z"
      }
    ],
    "mnemonic": "Alguém fazendo flexões e suando em bica para conseguir chegar no 9.",
    "parts_en": [
      "Nine"
    ],
    "meanings_en": [
      "Nine"
    ],
    "mnemonic_en": ""
  },
  "十": {
    "parts": [
      {
        "char": "十",
        "name": "juu",
        "meaning": "dez, cruz"
      }
    ],
    "mnemonic": "Uma cruz completa contendo as 4 direções e o centro: junta-se formando dez.",
    "parts_en": [
      "Cross"
    ],
    "meanings_en": [
      "Ten"
    ],
    "mnemonic_en": "A pictograph of a cross, which signifies the number ten. You know, like the ten commandments?"
  },
  "百": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um"
      },
      {
        "char": "白",
        "name": "shiro",
        "meaning": "branco"
      }
    ],
    "mnemonic": "O número um cem vezes torna um papel completamente branco.",
    "parts_en": [
      "Leaf",
      "Sun"
    ],
    "meanings_en": [
      "Hundred"
    ],
    "mnemonic_en": ""
  },
  "千": {
    "parts": [
      {
        "char": "丿",
        "name": "no",
        "meaning": "curva"
      },
      {
        "char": "十",
        "name": "juu",
        "meaning": "dez"
      }
    ],
    "mnemonic": "Um traço extra no dez para o transformar no mil.",
    "parts_en": [
      "Thousand"
    ],
    "meanings_en": [
      "Thousand"
    ],
    "mnemonic_en": "An extra stroke on the top, and a ten becomes a thousand! Why? Well, three strokes, three zeroes!"
  },
  "万": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um"
      },
      {
        "char": "勹",
        "name": "tsutsumi-gamae",
        "meaning": "embrulho, pacote"
      },
      {
        "char": "丿",
        "name": "no",
        "meaning": "traço curto"
      }
    ],
    "mnemonic": "No Japão rural antigo, você usava uma foice parecida para colher dez mil plantas.",
    "parts_en": [
      "Leaf",
      "Sword"
    ],
    "meanings_en": [
      "Ten Thousand"
    ],
    "mnemonic_en": "It's only ten thousand yen for a clothes hanger which you can attach to the ceiling by a rope!"
  },
  "円": {
    "parts": [
      {
        "char": "冂",
        "name": "keigamae",
        "meaning": "caixa de cabeça pra baixo / contorno"
      },
      {
        "char": "土",
        "name": "tsuchi/dois",
        "meaning": "na forma antiga formavam círculos"
      }
    ],
    "mnemonic": "Visualmente parece uma vitrine de loja com produtos à venda... em Ienes!",
    "parts_en": [
      "Lid",
      "Head"
    ],
    "meanings_en": [
      "Yen",
      "^Round",
      "^Circle"
    ],
    "mnemonic_en": "A circular one yen coin. This character looks like one of those bank teller windows where you can obtain such coins, with the upper two rectangles being the glass windows through which you can see the teller, and the lower part being where you put your hand through to take the money.\nInternationally we use the \"¥\" sign to denote the Japanese yen, however domestically the Japanese actually use this kanji as the sign for their currency."
  },
  "年": {
    "parts": [
      {
        "char": "丿",
        "name": "no",
        "meaning": "traço curto"
      },
      {
        "char": "二",
        "name": "ni",
        "meaning": "dois"
      },
      {
        "char": "丨",
        "name": "tate-bou",
        "meaning": "tronco / pilar"
      }
    ],
    "mnemonic": "Uma pessoa carregando a colheita nas costas após um ano inteiro de espera.",
    "parts_en": [
      "Gun",
      "Cow"
    ],
    "meanings_en": [
      "Year"
    ],
    "mnemonic_en": "Spending almost a year making an elaborate fake cow head — now that's basically a whole year wasted. What are you going to use that fake cow head for anyway, huh?"
  },
  "月": {
    "parts": [
      {
        "char": "月",
        "name": "tsuki",
        "meaning": "lua, carne"
      }
    ],
    "mnemonic": "O desenho de uma lua crescente e com algumas nuvens na frente dela.",
    "parts_en": [
      "Moon"
    ],
    "meanings_en": [
      "Moon",
      "^Month"
    ],
    "mnemonic_en": "A pictograph of a moon, whose full cycle takes approximately a month.\nIn the ancient times this character looked more like a crescent moon, but over time it morphed into being drawn like this."
  },
  "日": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol, dia"
      }
    ],
    "mnemonic": "O formato quadrado de um sol (antigamente redondo) com uma mancha solar no meio.",
    "parts_en": [
      "Sun"
    ],
    "meanings_en": [
      "Sun",
      "^Day"
    ],
    "mnemonic_en": "A pictograph of a sun, which makes a day.\nIn the ancient times this character was once written as a circle with a dot inside, but over time it became rectangular and the dot in the middle morphed into a line."
  },
  "時": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol, dia"
      },
      {
        "char": "寺",
        "name": "tera",
        "meaning": "templo budista"
      }
    ],
    "mnemonic": "Antigamente as pessoas mediam o tempo e a hora através do sol no templo.",
    "parts_en": [
      "Sun",
      "Temple"
    ],
    "meanings_en": [
      "Time",
      "^O'clock",
      "^Hour"
    ],
    "mnemonic_en": "Imagine a Buddhist temple, late in the day, with the sun already almost setting in the west. The monks at the temple are busy meditating, with the sun's gentle warmth caressing their faces. They've been doing that for several hours already, but to them it's only been a short while since they started. Yes, the flow of time at a Buddhist temple is very different from anywhere else in the world."
  },
  "分": {
    "parts": [
      {
        "char": "八",
        "name": "hachi",
        "meaning": "dividir"
      },
      {
        "char": "刀",
        "name": "katana",
        "meaning": "espada, faca"
      }
    ],
    "mnemonic": "Usar uma faca para dividir algo ao meio, cortando a hora em minutos.",
    "parts_en": [
      "Fins",
      "Sword"
    ],
    "meanings_en": [
      "Part",
      "^Minute",
      "^Separate",
      "^Understand"
    ],
    "mnemonic_en": "Even if you have short legs you can still probably hold a katana low between your legs and use it to chop stuff up into parts."
  },
  "上": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "chão, linha de base"
      },
      {
        "char": "卜",
        "name": "boku",
        "meaning": "marcador em cima"
      }
    ],
    "mnemonic": "A linha longa é o chão, e o tracinho está indicando tudo que fica para cima.",
    "parts_en": [
      "Toe",
      "Ground"
    ],
    "meanings_en": [
      "Above",
      "^Up",
      "^Over"
    ],
    "mnemonic_en": "A pictograph of a magical divining rod hovering above the ground.\nDo not confuse it with 下, which also features a magical levitating divining rod, however that one is crooked, so it's incorrectly hovering right below the ceiling instead of doing it properly above the ground like this one is."
  },
  "下": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "teto, chão elevado"
      },
      {
        "char": "卜",
        "name": "boku (virado)",
        "meaning": "marcador embaixo"
      }
    ],
    "mnemonic": "Base e algo pendurado para baixo, simbolizando \"abaixo\" ou \"embaixo\".",
    "parts_en": [
      "Ground",
      "Toe"
    ],
    "meanings_en": [
      "Below",
      "^Down",
      "^Under",
      "^Beneath"
    ],
    "mnemonic_en": "A pictograph of a crooked divining rod hovering in the air right below the ceiling.\nDo not confuse it with 上, which also features a magical levitating divining rod, however that one is not crooked, so it's properly hovering above the ground instead of right below the ceiling like this one is."
  },
  "中": {
    "parts": [
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca, buraco"
      },
      {
        "char": "丨",
        "name": "tate-bou",
        "meaning": "flecha / vara"
      }
    ],
    "mnemonic": "Uma flecha atingindo perfeitamente o meio do alvo.",
    "parts_en": [
      "Middle"
    ],
    "meanings_en": [
      "Middle",
      "^In",
      "^Inside",
      "^Center"
    ],
    "mnemonic_en": "A pictograph of a stick jammed in someone's mouth. Maybe a prehistoric dentist keeping his patient's mouth open...?"
  },
  "大": {
    "parts": [
      {
        "char": "大",
        "name": "dai",
        "meaning": "grande, pessoa"
      }
    ],
    "mnemonic": "Uma pessoa abrindo os braços e as pernas para parecer o mais grande possível.",
    "parts_en": [
      "Big"
    ],
    "meanings_en": [
      "Big",
      "^Large"
    ],
    "mnemonic_en": "A pictograph of a person with their hands stretched out. Why is he doing that? Who knows. He's really large, so it's not like you can do anything about him; he'll beat you up anyway."
  },
  "小": {
    "parts": [
      {
        "char": "亅",
        "name": "hane-bou",
        "meaning": "anzol, graveto principal"
      },
      {
        "char": "八",
        "name": "hachi",
        "meaning": "dividir / fragmentos"
      }
    ],
    "mnemonic": "Três pequenos pedaços ou farelos de algo que se estilhaçou.",
    "parts_en": [
      "Small"
    ],
    "meanings_en": [
      "Small",
      "^Little"
    ],
    "mnemonic_en": "We see here a pair of short legs and a fishing hook between them. Yes, that must be a pretty small fisherman if his fishing hook is longer than his legs!"
  },
  "山": {
    "parts": [
      {
        "char": "山",
        "name": "yama",
        "meaning": "montanha"
      }
    ],
    "mnemonic": "Desenho de três picos de montanhas colados um ao outro (o do meio é maior).",
    "parts_en": [
      "Mountain"
    ],
    "meanings_en": [
      "Mountain"
    ],
    "mnemonic_en": "A pictograph of a mountain."
  },
  "川": {
    "parts": [
      {
        "char": "川",
        "name": "kawa",
        "meaning": "rio"
      }
    ],
    "mnemonic": "A água de um rio descendo pela correnteza, contornando a terra dos dois lados.",
    "parts_en": [
      "River"
    ],
    "meanings_en": [
      "River"
    ],
    "mnemonic_en": "A pictograph of a bird's eye view of a river."
  },
  "海": {
    "parts": [
      {
        "char": "氵",
        "name": "sanzui",
        "meaning": "água"
      },
      {
        "char": "毎",
        "name": "mai",
        "meaning": "todo, cada"
      }
    ],
    "mnemonic": "Toda água abundante e vasta do mundo forma o grande mar.",
    "parts_en": [
      "Tsunami",
      "Gun",
      "Window"
    ],
    "meanings_en": [
      "Sea",
      "^Ocean"
    ],
    "mnemonic_en": "Eventually every drop of water ends up in the sea."
  },
  "空": {
    "parts": [
      {
        "char": "穴",
        "name": "ana",
        "meaning": "buraco, caverna"
      },
      {
        "char": "工",
        "name": "kou",
        "meaning": "trabalho, régua"
      }
    ],
    "mnemonic": "Olhar de dentro do buraco da caverna, sendo possível ver somente o céu (vazio).",
    "parts_en": [
      "Roof",
      "Legs",
      "Construction"
    ],
    "meanings_en": [
      "Sky"
    ],
    "mnemonic_en": "If you make a hole during construction it will be filled with empty air."
  },
  "火": {
    "parts": [
      {
        "char": "火",
        "name": "hi",
        "meaning": "fogo"
      }
    ],
    "mnemonic": "As chamas subindo por um amontoado de gravetos pegando fogo de uma fogueira.",
    "parts_en": [
      "Fire"
    ],
    "meanings_en": [
      "Fire"
    ],
    "mnemonic_en": "A pictograph of a person on fire."
  },
  "水": {
    "parts": [
      {
        "char": "水",
        "name": "mizu",
        "meaning": "água"
      }
    ],
    "mnemonic": "Gotas de água se espatifando e respingando ao bater em uma superfície da água central.",
    "parts_en": [
      "Water"
    ],
    "meanings_en": [
      "Water"
    ],
    "mnemonic_en": "A pictograph of a bird's eye view of water in a river and two of its banks on each side."
  },
  "木": {
    "parts": [
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore, madeira"
      }
    ],
    "mnemonic": "O tronco de uma árvore com seus galhos se estendendo para baixo.",
    "parts_en": [
      "Tree"
    ],
    "meanings_en": [
      "Tree",
      "^Wood"
    ],
    "mnemonic_en": "A pictograph of a tree, any kind of a tree."
  },
  "金": {
    "parts": [
      {
        "char": "𠆢",
        "name": "yane",
        "meaning": "teto, telhado"
      },
      {
        "char": "王",
        "name": "ou",
        "meaning": "rei"
      },
      {
        "char": "八",
        "name": "hachi",
        "meaning": "oito (como pedaços de ouro)"
      }
    ],
    "mnemonic": "O rei guardando seus pedaços preciosos de ouro debaixo do teto do palácio.",
    "parts_en": [
      "Gold"
    ],
    "meanings_en": [
      "Gold"
    ],
    "mnemonic_en": "Money and gold is known to make people corrupt. Even if it's not obvious, even if someone doesn't have a pair of horns growing out of their head and instead they're hiding those horns in their pants, you can still tell their whole existence is corrupt."
  },
  "土": {
    "parts": [
      {
        "char": "十",
        "name": "juu",
        "meaning": "cruz, prego"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "chão"
      }
    ],
    "mnemonic": "Uma cruz fincada no chão marcando a terra.",
    "parts_en": [
      "Dirt"
    ],
    "meanings_en": [
      "Dirt",
      "^Soil",
      "^Earth",
      "^Ground"
    ],
    "mnemonic_en": "A pictograph of a cross planted into the earth. The lower stroke is longer since it signifies the ground, or the horizon, which infinitely stretches in every direction.\nDo not confuse with 士 where the upper stroke is longer."
  },
  "人": {
    "parts": [
      {
        "char": "人",
        "name": "hito",
        "meaning": "pessoa"
      }
    ],
    "mnemonic": "O perfil de uma pessoa em pé com as duas pernas abertas caminhando.",
    "parts_en": [
      "Person"
    ],
    "meanings_en": [
      "Person"
    ],
    "mnemonic_en": "A pictograph of a headless, armless person."
  },
  "口": {
    "parts": [
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca, buraco"
      }
    ],
    "mnemonic": "O formato escancarado de uma boca quadrada aberta.",
    "parts_en": [
      "Mouth"
    ],
    "meanings_en": [
      "Mouth"
    ],
    "mnemonic_en": "A pictograph of an open mouth."
  },
  "手": {
    "parts": [
      {
        "char": "手",
        "name": "te",
        "meaning": "mão"
      }
    ],
    "mnemonic": "As linhas da palma de uma mão e o formato dos pulsos.",
    "parts_en": [
      "Hand"
    ],
    "meanings_en": [
      "Hand"
    ],
    "mnemonic_en": "A human hand is truly a magnificent body part; it's definitely useful for at least a thousand and one different things!"
  },
  "目": {
    "parts": [
      {
        "char": "目",
        "name": "me",
        "meaning": "olho"
      }
    ],
    "mnemonic": "O contorno de um olho virado de lado, com a íris quadrada no centro.",
    "parts_en": [
      "Eye"
    ],
    "meanings_en": [
      "Eye"
    ],
    "mnemonic_en": "A stylized pictograph of an eye. The two lines in the middle is the iris."
  },
  "耳": {
    "parts": [
      {
        "char": "耳",
        "name": "mimi",
        "meaning": "orelha"
      }
    ],
    "mnemonic": "As várias dobras cartilaginosas que formam o pavilhão auricular de uma orelha.",
    "parts_en": [
      "Ear"
    ],
    "meanings_en": [
      "Ear"
    ],
    "mnemonic_en": "A pictograph of a rectangular ear."
  },
  "心": {
    "parts": [
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração"
      }
    ],
    "mnemonic": "Os quatro traços representam as veias e vasos pulsando do formato de um coração.",
    "parts_en": [
      "Heart"
    ],
    "meanings_en": [
      "Heart"
    ],
    "mnemonic_en": "A pictograph of a heart."
  },
  "気": {
    "parts": [
      {
        "char": "气",
        "name": "kigamae",
        "meaning": "vapor, ar"
      },
      {
        "char": "メ",
        "name": "me",
        "meaning": "espada, energia"
      }
    ],
    "mnemonic": "A energia invisível que flui no ar e alimenta as ações de força interior.",
    "parts_en": [
      "Energy",
      "Treasure"
    ],
    "meanings_en": [
      "Energy",
      "^Spirit"
    ],
    "mnemonic_en": "If you inhale a lot of nasty vapors you'll collapse to the floor, your eyes will turn into crosses like in a cartoon (X_X) and you'll lose your current state of mind."
  },
  "男": {
    "parts": [
      {
        "char": "田",
        "name": "ta",
        "meaning": "campo de arroz"
      },
      {
        "char": "力",
        "name": "chikara",
        "meaning": "força"
      }
    ],
    "mnemonic": "Trabalhar usando a força física nos campos de arroz era papel do homem na antiguidade.",
    "parts_en": [
      "Rice Paddy",
      "Power"
    ],
    "meanings_en": [
      "Man"
    ],
    "mnemonic_en": "A man is someone who has the power to work in a rice field."
  },
  "女": {
    "parts": [
      {
        "char": "女",
        "name": "onna",
        "meaning": "mulher"
      }
    ],
    "mnemonic": "O formato curvo e gracioso das vestes de uma mulher ajoelhada tradicionalmente.",
    "parts_en": [
      "Woman"
    ],
    "meanings_en": [
      "Woman"
    ],
    "mnemonic_en": "This kanji can be decomposed into three strokes:\n\n\"く\" (\"ku\" in hiragana),\n\"ノ\" (\"no\" in katakana),\n\"一\" (\"ichi\" in kanji),\n\nwhich gives us くノ一 (\"kunoichi\") — a female ninja."
  },
  "子": {
    "parts": [
      {
        "char": "子",
        "name": "ko",
        "meaning": "criança"
      }
    ],
    "mnemonic": "Uma criança embrulhadinha e com os braços abertos querendo colo.",
    "parts_en": [
      "Child"
    ],
    "meanings_en": [
      "Child",
      "^Kid"
    ],
    "mnemonic_en": "A pictograph of a child. He's wearing a bright red Mario cap, and he has his arms outstretched to give you a hug. So cute!"
  },
  "本": {
    "parts": [
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um (linha horizontal na base)"
      }
    ],
    "mnemonic": "Marcando a base de uma árvore, temos a raiz. Livros (hon) são a raiz ou origem do conhecimento.",
    "parts_en": [
      "Book"
    ],
    "meanings_en": [
      "Book",
      "^Origin",
      "^Real",
      "^Main"
    ],
    "mnemonic_en": "A pictograph of a tree with an extra stroke at the bottom to show where it's supposed to be cut. Because you first need to cut at least one tree to make a book!"
  },
  "語": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "dizer, palavras"
      },
      {
        "char": "五",
        "name": "go",
        "meaning": "cinco"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      }
    ],
    "mnemonic": "Palavras ditas da boca, com cinco sentidos. Falar muitas palavras se torna um idioma.",
    "parts_en": [
      "Say",
      "Five",
      "Mouth"
    ],
    "meanings_en": [
      "Language"
    ],
    "mnemonic_en": "Five mouths are saying something to each other in a language I can't understand. Russian spies perhaps...?"
  },
  "国": {
    "parts": [
      {
        "char": "囗",
        "name": "kuni-gamae",
        "meaning": "fronteira, caixa"
      },
      {
        "char": "玉",
        "name": "tama",
        "meaning": "joia, gema"
      }
    ],
    "mnemonic": "Uma terra valiosa como joia, protegida por grandes muralhas e fronteiras: um país.",
    "parts_en": [
      "Mouth",
      "King",
      "Drop"
    ],
    "meanings_en": [
      "Country"
    ],
    "mnemonic_en": "The country of Japan's flag looks like a red ball inside of a white rectangular box."
  },
  "学": {
    "parts": [
      {
        "char": "⺍",
        "name": "tsuu",
        "meaning": "pequeno, estudar (topo)"
      },
      {
        "char": "冖",
        "name": "wakanmuri",
        "meaning": "coroa, cobertura"
      },
      {
        "char": "子",
        "name": "ko",
        "meaning": "criança"
      }
    ],
    "mnemonic": "Crianças debaixo de um grande teto com ferramentas na cabeça absorvendo conhecimento: a escola.",
    "parts_en": [
      "Viking",
      "Child"
    ],
    "meanings_en": [
      "Study",
      "^Learn",
      "^Learning"
    ],
    "mnemonic_en": "What do you do when your child just won't behave and absolutely refuses to study? You lock him up in a derelict hut deep in the forest, and force him to study under a roof full of tiny hairs which are — on a closer look — millions of tiny, hairy, disgusting caterpillars.\nAnd since the hut's roof is so old and dilapidated it can collapse at any time. The threat of all of those creepy caterpillars falling on your child's head should really motivate him to study. The faster he studies the faster he'll be able to leave the hut!"
  },
  "生": {
    "parts": [
      {
        "char": "生",
        "name": "sei",
        "meaning": "nascer, dar vida"
      }
    ],
    "mnemonic": "Um pequeno broto crescendo forte do chão, o início de uma nova vida.",
    "parts_en": [
      "Life"
    ],
    "meanings_en": [
      "Life"
    ],
    "mnemonic_en": "That decapitated cow head you have over there will eventually return to the earth, be slowly absorbed, and will be transformed into nutrients that will nurture new life. Ah, the cycle of life."
  },
  "花": {
    "parts": [
      {
        "char": "艹",
        "name": "kusa-kanmuri",
        "meaning": "planta, grama (topo)"
      },
      {
        "char": "化",
        "name": "ka",
        "meaning": "mudança, transformar"
      }
    ],
    "mnemonic": "O momento mágico em que uma simples planta muda (transforma) em uma linda flor.",
    "parts_en": [
      "Flowers",
      "Leader",
      "Spoon"
    ],
    "meanings_en": [
      "Flower"
    ],
    "mnemonic_en": "These blades of glass will someday transform into a beautiful flower."
  },
  "車": {
    "parts": [
      {
        "char": "車",
        "name": "kuruma",
        "meaning": "carro, veículo"
      }
    ],
    "mnemonic": "Se você olhar de cima, vê as duas rodas laterais e o chassi no centro de uma carroça.",
    "parts_en": [
      "Car"
    ],
    "meanings_en": [
      "Car"
    ],
    "mnemonic_en": "A pictograph of a vehicle, show from a bird's-eye view. You have the front wheels at the top, the back wheels at the bottom, and the middle is where you put stuff in, be it people or goods."
  },
  "友": {
    "parts": [
      {
        "char": "ナ",
        "name": "hidari",
        "meaning": "mão esquerda"
      },
      {
        "char": "又",
        "name": "mata",
        "meaning": "mão direita / novamente"
      }
    ],
    "mnemonic": "Duas mãos se entrelaçando em apoio mútuo, o símbolo de um bom amigo.",
    "parts_en": [
      "Narwhal",
      "Stool"
    ],
    "meanings_en": [
      "Friend"
    ],
    "mnemonic_en": "If someone's once again by your side when your in trouble for the millionth time, you know you have a true friend."
  },
  "先": {
    "parts": [
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra (variante)"
      },
      {
        "char": "儿",
        "name": "ninnyo",
        "meaning": "pernas humanas (andando)"
      }
    ],
    "mnemonic": "Alguém que usou suas pernas para andar e chegar à terra *antes* de você.",
    "parts_en": [
      "Slide",
      "Dirt",
      "Legs"
    ],
    "meanings_en": [
      "Previous",
      "^Ahead",
      "^Past",
      "^Former"
    ],
    "mnemonic_en": "It's a cow with human legs! Wow! I've never seen such a creature before!"
  },
  "休": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore"
      }
    ],
    "mnemonic": "Uma pessoa encostada ao lado de uma árvore tirando um merecido descanso.",
    "parts_en": [
      "Leader",
      "Tree"
    ],
    "meanings_en": [
      "Rest"
    ],
    "mnemonic_en": "A really thin person is not going to be very strong physically, so when covering long distances he'll have to rest quite frequenty. And what's the best place to rest when you're out in the nature? Well, it's by a nearby tree! Not only it shields you from the bad weather, but you can also lean on it to recover strength."
  },
  "外": {
    "parts": [
      {
        "char": "夕",
        "name": "yuu",
        "meaning": "tarde, entardecer"
      },
      {
        "char": "卜",
        "name": "boku",
        "meaning": "varinha mágica / previsão"
      }
    ],
    "mnemonic": "Na antiguidade, usar a varinha de adivinhação fora de casa só de tarde para não espantar a magia.",
    "parts_en": [
      "Evening",
      "Toe"
    ],
    "meanings_en": [
      "Outside"
    ],
    "mnemonic_en": "When you want to test out a new sword it's best to grab a stick, stick it into the ground, and slash it with your new sword during the evening while it's still bright outside."
  },
  "午": {
    "parts": [
      {
        "char": "午",
        "name": "go",
        "meaning": "meio-dia, cavalo do zodíaco"
      }
    ],
    "mnemonic": "Parece o número 10 (十) com algo deitado no topo bloqueando o caminho: o ponteiro batendo no topo, meio-dia.",
    "parts_en": [
      "Slide",
      "Dry"
    ],
    "meanings_en": [
      "Noon"
    ],
    "mnemonic_en": "It's a pictograph of a cow, but it's really close to the fence, with its head reaching over the fence. It's looking an you and saying \"noon, noon\". Huh, it looks like this cow doesn't moo like every other cow, and it apparently also knows when it's noon..."
  },
  "校": {
    "parts": [
      {
        "char": "木",
        "name": "kihen",
        "meaning": "árvore, madeira"
      },
      {
        "char": "交",
        "name": "majiru",
        "meaning": "misturar, cruzar"
      }
    ],
    "mnemonic": "No Japão rural, edifícios feitos de madeira onde caminhos de crianças se cruzam: a escola.",
    "parts_en": [
      "Tree",
      "Lid",
      "Father"
    ],
    "meanings_en": [
      "School"
    ],
    "mnemonic_en": "A school is not only a place where you learn; it's also a place where you mingle with your classmates around a tree in the courtyard during the breaks."
  },
  "名": {
    "parts": [
      {
        "char": "夕",
        "name": "yuu",
        "meaning": "anoitecer, tarde"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      }
    ],
    "mnemonic": "Quando anoitece e você não consegue enxergar o rosto, usa a boca para chamar o nome.",
    "parts_en": [
      "Evening",
      "Mouth"
    ],
    "meanings_en": [
      "Name",
      "^Famous"
    ],
    "mnemonic_en": "When you're having a date this evening with a girl you've anonymously met online it'd be the best to open your mouth and tell her your name before the sun sets and you'll go to your apartment to do the deed. Otherwise it'll be really awkward the next day when you wake up next to each other, in the same bed, and not know the other's name."
  },
  "間": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portões duplos"
      },
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      }
    ],
    "mnemonic": "Os raios do sol passando exatamente entre o espaço vazio no meio dos dois portões.",
    "parts_en": [
      "Gate",
      "Sun"
    ],
    "meanings_en": [
      "Interval",
      "^Interval Of Time",
      "^Time Interval"
    ],
    "mnemonic_en": "There is only a limited interval of time during which the sun can be seen through the gate."
  },
  "長": {
    "parts": [
      {
        "char": "長",
        "name": "chou",
        "meaning": "longo, chefe"
      }
    ],
    "mnemonic": "O perfil de um chefe idoso de cabelos longos varrendo o chão com uma bengala.",
    "parts_en": [
      "Long"
    ],
    "meanings_en": [
      "Long",
      "^Leader"
    ],
    "mnemonic_en": "A hair comb with really long legs (also called \"teeth\" — you know, the part which you actually use to brush your hair with?) is a fashion accessory that's not going to be seen often. It may be long, but it certainly isn't practical!"
  },
  "母": {
    "parts": [
      {
        "char": "母",
        "name": "haha",
        "meaning": "mãe"
      }
    ],
    "mnemonic": "A imagem de uma mulher com dois pontinhos seios largos amamentando, o maior símbolo de nutrição materna.",
    "parts_en": [
      "Sun",
      "Drop"
    ],
    "meanings_en": [
      "Mother",
      "^Mom",
      "^Mum"
    ],
    "mnemonic_en": "A pictograph of woman's breasts with nipples, turned on its side."
  },
  "父": {
    "parts": [
      {
        "char": "父",
        "name": "chichi",
        "meaning": "pai"
      }
    ],
    "mnemonic": "Duas mãos firmes segurando dois eixos ou varas cruzadas, um símbolo arcaico de autoridade e disciplina paterna.",
    "parts_en": [
      "Father"
    ],
    "meanings_en": [
      "Father",
      "^Dad"
    ],
    "mnemonic_en": "Traditionally when it's time to punish a child it's usually the father who doles out the punishment. And how to better punish a child than to have him sit his short legs on bare folding chair legs? Folding chairs usually have a piece of cloth on the top on which you can sit, but if you remove that and only leave the metal legs... ouch!"
  },
  "白": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      },
      {
        "char": "丿",
        "name": "no",
        "meaning": "raio"
      }
    ],
    "mnemonic": "Um pequeno raio de sol escapando pelo topo, simbolizando a luz branca e brilhante do sol.",
    "parts_en": [
      "White"
    ],
    "meanings_en": [
      "White"
    ],
    "mnemonic_en": "We are very fortunate that the Sun is approximately 150 million kilometres apart from us. If you'd take only a single drop of the Sun, and put it here on Earth, it'd be so bright you'd see nothing but white."
  },
  "雨": {
    "parts": [
      {
        "char": "雨",
        "name": "ame",
        "meaning": "chuva"
      }
    ],
    "mnemonic": "Gotas caindo do céu, representadas pelos quatro pontos e presas dentro da janela que é a nuvem.",
    "parts_en": [
      "Rain"
    ],
    "meanings_en": [
      "Rain"
    ],
    "mnemonic_en": "A pictograph of a window through which you can see the rain."
  },
  "高": {
    "parts": [
      {
        "char": "亠",
        "name": "nabebuta",
        "meaning": "tampa (teto)"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca, janela"
      },
      {
        "char": "冂",
        "name": "keigamae",
        "meaning": "portão, estrutura externa"
      }
    ],
    "mnemonic": "Um prédio muito alto com um telhado em cima e portões e janelas no meio da estrutura.",
    "parts_en": [
      "Lid",
      "Mouth",
      "Mustache"
    ],
    "meanings_en": [
      "Tall",
      "^Expensive",
      "^High"
    ],
    "mnemonic_en": "That is a really high two-story building. We have the mouth on the bottom being the entrance, the upside-down-box being the first floor, another mouth being the second floor widow, and a lid at the top being its roof."
  },
  "天": {
    "parts": [
      {
        "char": "大",
        "name": "dai",
        "meaning": "grande"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um (o mais alto)"
      }
    ],
    "mnemonic": "Acima de um homem grande existe apenas uma única coisa mais majestosa: o próprio céu.",
    "parts_en": [
      "Heaven"
    ],
    "meanings_en": [
      "Heaven"
    ],
    "mnemonic_en": "A pictograph of a large man with outstretched arms, and one line above his head which represents the heaven, which is a plane of existence one level higher that the one the man's currently in.\nDo not confuse it with 夭, which looks similar and whose first stroke is written in right-to-left and is slightly curved."
  },
  "食": {
    "parts": [
      {
        "char": "𠆢",
        "name": "yane",
        "meaning": "teto, telhado"
      },
      {
        "char": "良",
        "name": "yoi",
        "meaning": "bom"
      }
    ],
    "mnemonic": "Reunir pessoas sob o mesmo teto para compartilhar algo bom para a saúde do corpo: a comida.",
    "parts_en": [
      "Eat"
    ],
    "meanings_en": [
      "Eat",
      "^Meal"
    ],
    "mnemonic_en": "A good person will eat everything that their momma puts on their plate."
  },
  "足": {
    "parts": [
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca, perna aberta (antigo)"
      },
      {
        "char": "止",
        "name": "tomeru",
        "meaning": "parar, pisar"
      }
    ],
    "mnemonic": "A metade superior do corpo e a parte inferior focada no pé que pisa no chão.",
    "parts_en": [
      "Foot"
    ],
    "meanings_en": [
      "Foot",
      "^Leg",
      "^Sufficient"
    ],
    "mnemonic_en": "Gross! Do not put your mouth in your running shoes! That's where your foot goes, right?!"
  },
  "体": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "本",
        "name": "hon",
        "meaning": "origem, principal"
      }
    ],
    "mnemonic": "A parte principal (origem) e fundamental de uma pessoa é o seu próprio corpo físico.",
    "parts_en": [
      "Leader",
      "Book"
    ],
    "meanings_en": [
      "Body"
    ],
    "mnemonic_en": "A thin person is a weakling who needs to read books on how to get their body fat and strong again.\nImagine you're weakling loser who doesn't go out too much, has no friends and never had any interest in sports or fitness, but suddenly you want to get fit so that the girl you fell in love with likes you back. What do you do? Obviously you need to read a few fitness books on how to build up your body and get that sexy six-pack!"
  },
  "入": {
    "parts": [
      {
        "char": "入",
        "name": "iru",
        "meaning": "entrar"
      }
    ],
    "mnemonic": "Parece o kanji de pessoa 人, mas a perna direita está entrando e empurrando a esquerda da frente.",
    "parts_en": [
      "Enter"
    ],
    "meanings_en": [
      "Enter"
    ],
    "mnemonic_en": "A pictograph of a person with one hand over his head pointing to the entrance on the left. Over there, enter over there!"
  },
  "出": {
    "parts": [
      {
        "char": "山",
        "name": "yama",
        "meaning": "montanha"
      },
      {
        "char": "山",
        "name": "yama",
        "meaning": "montanha"
      }
    ],
    "mnemonic": "Uma montanha em cima de outra montanha representa um broto rompendo a terra e saindo para fora.",
    "parts_en": [
      "Mountain"
    ],
    "meanings_en": [
      "Exit"
    ],
    "mnemonic_en": "You see two mountains stacked on top of each other that stand in your way. Uh... is that the exit...? Why is getting out of here so hard?!"
  },
  "来": {
    "parts": [
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore, madeira"
      },
      {
        "char": "丷",
        "name": "hachi",
        "meaning": "trigo (no topo antigo), direção externa"
      }
    ],
    "mnemonic": "A forma antiga parecia uma espiga de trigo, que \"veio\" de longe para alimentar as pessoas.",
    "parts_en": [
      "Ground",
      "Rice"
    ],
    "meanings_en": [
      "Come",
      "^Next"
    ],
    "mnemonic_en": "One serving of rice, coming up!"
  },
  "見": {
    "parts": [
      {
        "char": "目",
        "name": "me",
        "meaning": "olho"
      },
      {
        "char": "儿",
        "name": "ninnyo",
        "meaning": "pernas"
      }
    ],
    "mnemonic": "Um olho enorme em cima de pernas humanas andando por aí para tentar ver tudo ao redor.",
    "parts_en": [
      "See"
    ],
    "meanings_en": [
      "See"
    ],
    "mnemonic_en": "A walking eye with legs attached; surely its main purpose is to see."
  },
  "行": {
    "parts": [
      {
        "char": "彳",
        "name": "gyouninben",
        "meaning": "passos"
      },
      {
        "char": "亍",
        "name": "teku",
        "meaning": "passos adiante"
      }
    ],
    "mnemonic": "O desenho de um grande cruzamento por onde milhares de pessoas andam para \"ir\" a todos os lugares.",
    "parts_en": [
      "Go"
    ],
    "meanings_en": [
      "Go"
    ],
    "mnemonic_en": "Every journey starts the same: first you take a single small step and stop standing still, and then you go!"
  },
  "聞": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portões"
      },
      {
        "char": "耳",
        "name": "mimi",
        "meaning": "orelha"
      }
    ],
    "mnemonic": "Você encostando a sua orelha perfeitamente no vão do portão principal para ouvir a conversa dos seus vizinhos.",
    "parts_en": [
      "Gate",
      "Ear"
    ],
    "meanings_en": [
      "Hear"
    ],
    "mnemonic_en": "Stick your ear out of the gate and you'll hear everything that goes on outside."
  },
  "読": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "palavras, dizer"
      },
      {
        "char": "売",
        "name": "uru",
        "meaning": "vender"
      }
    ],
    "mnemonic": "Um vendedor falando e lendo as palavras do seu folheto em voz alta para atrair clientes.",
    "parts_en": [
      "Say",
      "Sell"
    ],
    "meanings_en": [
      "Read"
    ],
    "mnemonic_en": "Every good salesman that tries to sell you something will say whatever they can to get you to buy their product, but don't be fooled! You need to read the fine-print! There's always a catch."
  },
  "書": {
    "parts": [
      {
        "char": "聿",
        "name": "fude",
        "meaning": "pincel"
      },
      {
        "char": "曰",
        "name": "etsu",
        "meaning": "dizer"
      }
    ],
    "mnemonic": "Usar um pincel para registrar no papel aquilo que alguém disse em voz alta.",
    "parts_en": [
      "Brush",
      "Sun"
    ],
    "meanings_en": [
      "Write",
      "^Writing"
    ],
    "mnemonic_en": "In the old days if you wanted to write something you'd use your brush and some ink on a piece of parchment, and then lay it out in the sun to dry."
  },
  "話": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "palavras"
      },
      {
        "char": "舌",
        "name": "shita",
        "meaning": "língua"
      }
    ],
    "mnemonic": "Basta apenas usar as palavras junto com o movimento da língua que surge a conversa.",
    "parts_en": [
      "Say",
      "Tongue"
    ],
    "meanings_en": [
      "Talk",
      "^Speak"
    ],
    "mnemonic_en": "You can say many things without speaking 一 with your hands, your body language, or through your actions, but to speak, ah, yes, you need to actually use your tongue to say the things you want to say."
  },
  "会": {
    "parts": [
      {
        "char": "人",
        "name": "yane (pessoa)",
        "meaning": "pessoas juntas, telhado"
      },
      {
        "char": "云",
        "name": "iu",
        "meaning": "nuvem / dizer"
      }
    ],
    "mnemonic": "Várias pessoas sob o mesmo teto conversando e discutindo ideias em uma reunião.",
    "parts_en": [
      "Meet"
    ],
    "meanings_en": [
      "Meet"
    ],
    "mnemonic_en": "In a meeting one person often has to quote other people to get their point across."
  },
  "社": {
    "parts": [
      {
        "char": "礻",
        "name": "shimesuhen",
        "meaning": "altar, espíritos, indicar"
      },
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra, chão"
      }
    ],
    "mnemonic": "Um altar colocado na terra abençoada, representando primeiro um templo e depois a \"companhia\" ou empresa que se reúne.",
    "parts_en": [
      "Spirit",
      "Dirt"
    ],
    "meanings_en": [
      "Company"
    ],
    "mnemonic_en": "When you join a Japanese company it's like joining a cult. You'll have to worship the earth on which your boss walks on, and treat the meeting room table like a sacred altar, or else you'll get violently bullied and ostracized."
  },
  "電": {
    "parts": [
      {
        "char": "雨",
        "name": "amekanmuri",
        "meaning": "chuva"
      },
      {
        "char": "申",
        "name": "maosu",
        "meaning": "dizer / estender (antigamente relâmpago)"
      }
    ],
    "mnemonic": "O relâmpago (energia) brilhando rapidamente durante uma forte tempestade com chuva.",
    "parts_en": [
      "Rain",
      "Rice Paddy",
      "Umbrella"
    ],
    "meanings_en": [
      "Electricity"
    ],
    "mnemonic_en": "An umbrella can protect you from the sun and from the rain, but it's not very effective against an electrical storm. If you get struck by a lightning it's over for you."
  },
  "話す": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "palavras"
      },
      {
        "char": "舌",
        "name": "shita",
        "meaning": "língua"
      }
    ],
    "mnemonic": "Usar as palavras junto com o movimento da língua para falar ou conversar.",
    "parts_en": [
      "Say",
      "Tongue"
    ],
    "meanings_en": [
      "Talk",
      "^Speak"
    ],
    "mnemonic_en": "You can say many things without speaking 一 with your hands, your body language, or through your actions, but to speak, ah, yes, you need to actually use your tongue to say the things you want to say."
  },
  "食べる": {
    "parts": [
      {
        "char": "𠆢",
        "name": "yane",
        "meaning": "teto, pessoa"
      },
      {
        "char": "良",
        "name": "yoi",
        "meaning": "bom"
      }
    ],
    "mnemonic": "Reunir as pessoas debaixo de um teto para consumir algo bom (comida).",
    "parts_en": [
      "Eat"
    ],
    "meanings_en": [
      "Eat",
      "^Meal"
    ],
    "mnemonic_en": "A good person will eat everything that their momma puts on their plate."
  },
  "飲む": {
    "parts": [
      {
        "char": "食",
        "name": "shokuhen",
        "meaning": "comida, comer"
      },
      {
        "char": "欠",
        "name": "akubi",
        "meaning": "abrir a boca, falta"
      }
    ],
    "mnemonic": "Abrir amplamente a boca para ingerir um alimento líquido, bebendo.",
    "parts_en": [
      "Eat",
      "Lack"
    ],
    "meanings_en": [
      "Drink"
    ],
    "mnemonic_en": ""
  },
  "見る": {
    "parts": [
      {
        "char": "目",
        "name": "me",
        "meaning": "olho"
      },
      {
        "char": "儿",
        "name": "ninnyo",
        "meaning": "pernas"
      }
    ],
    "mnemonic": "Um olho com pernas indo ativamente a diversos lugares com o propósito de observar e ver tudo.",
    "parts_en": [
      "See"
    ],
    "meanings_en": [
      "See"
    ],
    "mnemonic_en": "A walking eye with legs attached; surely its main purpose is to see."
  },
  "来る": {
    "parts": [
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore, madeira"
      },
      {
        "char": "丷",
        "name": "hachi",
        "meaning": "trigo (no topo antigo), direção externa"
      }
    ],
    "mnemonic": "Uma planta que se assemelha a uma espiga de trigo que veio de longe.",
    "parts_en": [
      "Ground",
      "Rice"
    ],
    "meanings_en": [
      "Come",
      "^Next"
    ],
    "mnemonic_en": "One serving of rice, coming up!"
  },
  "行く": {
    "parts": [
      {
        "char": "彳",
        "name": "gyouninben",
        "meaning": "passos"
      },
      {
        "char": "亍",
        "name": "teku",
        "meaning": "passos adiante"
      }
    ],
    "mnemonic": "Passos esquerdo e direito caminhando firmes por uma encruzilhada para ir a algum lugar.",
    "parts_en": [
      "Go"
    ],
    "meanings_en": [
      "Go"
    ],
    "mnemonic_en": "Every journey starts the same: first you take a single small step and stop standing still, and then you go!"
  },
  "帰る": {
    "parts": [
      {
        "char": "刂",
        "name": "ritto",
        "meaning": "faca, facção"
      },
      {
        "char": "ヨ",
        "name": "yo",
        "meaning": "vassoura / voltar"
      },
      {
        "char": "冖",
        "name": "wakanmuri",
        "meaning": "cobertura"
      }
    ],
    "mnemonic": "Afastar ativamente os obstáculos para arrumar as malas e retornar em segurança para casa sob seu próprio teto.",
    "parts_en": [
      "Knife",
      "Wolverine",
      "Forehead",
      "Towel"
    ],
    "meanings_en": [
      "Return",
      "^Return Home"
    ],
    "mnemonic_en": "When you return home after a long vacation you'll have to grab a broom and clean up the whole place. And since you're returning from a vacation in Japan you'd use the katakana to spell \"return\" as リターン with an リ."
  },
  "入る": {
    "parts": [
      {
        "char": "入",
        "name": "iru",
        "meaning": "entrar"
      }
    ],
    "mnemonic": "A imagem de uma ponta de lança ou pessoa forçando a entrada, empurrando algo.",
    "parts_en": [
      "Enter"
    ],
    "meanings_en": [
      "Enter"
    ],
    "mnemonic_en": "A pictograph of a person with one hand over his head pointing to the entrance on the left. Over there, enter over there!"
  },
  "出る": {
    "parts": [
      {
        "char": "山",
        "name": "yama",
        "meaning": "montanha"
      },
      {
        "char": "山",
        "name": "yama",
        "meaning": "montanha"
      }
    ],
    "mnemonic": "O formato de uma montanha encavalada sobre a outra simulando plantas saindo do chão para cima.",
    "parts_en": [
      "Mountain"
    ],
    "meanings_en": [
      "Exit"
    ],
    "mnemonic_en": "You see two mountains stacked on top of each other that stand in your way. Uh... is that the exit...? Why is getting out of here so hard?!"
  },
  "読む": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "palavras, dizer"
      },
      {
        "char": "売",
        "name": "uru",
        "meaning": "vender"
      }
    ],
    "mnemonic": "Palavras sendo faladas como se um vendedor as anunciasse, simulando a leitura em voz alta.",
    "parts_en": [
      "Say",
      "Sell"
    ],
    "meanings_en": [
      "Read"
    ],
    "mnemonic_en": "Every good salesman that tries to sell you something will say whatever they can to get you to buy their product, but don't be fooled! You need to read the fine-print! There's always a catch."
  },
  "書く": {
    "parts": [
      {
        "char": "聿",
        "name": "fude",
        "meaning": "pincel"
      },
      {
        "char": "曰",
        "name": "etsu",
        "meaning": "dizer"
      }
    ],
    "mnemonic": "Alguém firmemente segurando um pincel e registrando o que foi dito.",
    "parts_en": [
      "Brush",
      "Sun"
    ],
    "meanings_en": [
      "Write",
      "^Writing"
    ],
    "mnemonic_en": "In the old days if you wanted to write something you'd use your brush and some ink on a piece of parchment, and then lay it out in the sun to dry."
  },
  "聞く": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portões"
      },
      {
        "char": "耳",
        "name": "mimi",
        "meaning": "orelha"
      }
    ],
    "mnemonic": "Uma orelha perfeitamente pressionada no buraco do portão prestando atenção com vontade de ouvir algo ou até perguntar.",
    "parts_en": [
      "Gate",
      "Ear"
    ],
    "meanings_en": [
      "Hear"
    ],
    "mnemonic_en": "Stick your ear out of the gate and you'll hear everything that goes on outside."
  },
  "言う": {
    "parts": [
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "uma (linha de som)"
      }
    ],
    "mnemonic": "O desenho de uma boca com ondas sonoras ou palavras escapando por cima ao dizer algo.",
    "parts_en": [
      "Say"
    ],
    "meanings_en": [
      "Say"
    ],
    "mnemonic_en": "A cryptic pictograph of a face trying to say something.\nWe have a mouth at the bottom, then we have two short lines signifying a nose (this person has a really long nose, hence two lines), then one long line for the eyes (this person has an eye visor just like RoboCop), and then the final line at the top to represent the forehead."
  },
  "買う": {
    "parts": [
      {
        "char": "罒",
        "name": "amigashira",
        "meaning": "rede"
      },
      {
        "char": "貝",
        "name": "kai",
        "meaning": "concha, dinheiro"
      }
    ],
    "mnemonic": "Lançar uma grande rede para reunir e obter objetos usando conchas (dinheiro da antiguidade) como forma de comprar.",
    "parts_en": [
      "Net",
      "Shellfish"
    ],
    "meanings_en": [
      "Buy"
    ],
    "mnemonic_en": "The fisherman's small net is full of live shellfish! Will you buy some?"
  },
  "休む": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "木",
        "name": "moku",
        "meaning": "árvore"
      }
    ],
    "mnemonic": "A imagem pacífica de uma pessoa que decidiu encostar no tronco de uma árvore para descansar.",
    "parts_en": [
      "Leader",
      "Tree"
    ],
    "meanings_en": [
      "Rest"
    ],
    "mnemonic_en": "A really thin person is not going to be very strong physically, so when covering long distances he'll have to rest quite frequenty. And what's the best place to rest when you're out in the nature? Well, it's by a nearby tree! Not only it shields you from the bad weather, but you can also lean on it to recover strength."
  },
  "立つ": {
    "parts": [
      {
        "char": "立",
        "name": "tatsu",
        "meaning": "pôr-se de pé"
      }
    ],
    "mnemonic": "O retrato de uma pessoa em pé com os dois braços caídos ao longo do corpo no chão.",
    "parts_en": [
      "Stand"
    ],
    "meanings_en": [
      "Stand"
    ],
    "mnemonic_en": "A pictograph of a lid which is standing up placed on a pair of horns protruding from the ground. Wait, what?"
  },
  "新しい": {
    "parts": [
      {
        "char": "立",
        "name": "tatsu",
        "meaning": "em pé / pimenta"
      },
      {
        "char": "木",
        "name": "ki",
        "meaning": "árvore"
      },
      {
        "char": "斤",
        "name": "ono",
        "meaning": "machado"
      }
    ],
    "mnemonic": "Usar um machado afiado em uma grande árvore em pé para produzir madeira limpa e totalmente nova.",
    "parts_en": [
      "Stand",
      "Tree",
      "Axe"
    ],
    "meanings_en": [
      "New"
    ],
    "mnemonic_en": "A new axe is going to be sharp. So sharp that it might not leave any tree standing up."
  },
  "古い": {
    "parts": [
      {
        "char": "十",
        "name": "juu",
        "meaning": "dez"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca, gerações"
      }
    ],
    "mnemonic": "Aquilo que foi repassado através da boca ao longo de mais de dez gerações é naturalmente velho e antigo.",
    "parts_en": [
      "Old"
    ],
    "meanings_en": [
      "Old"
    ],
    "mnemonic_en": "A pictograph of an old gravestone."
  },
  "多い": {
    "parts": [
      {
        "char": "夕",
        "name": "yuu",
        "meaning": "tarde, entardecer"
      },
      {
        "char": "夕",
        "name": "yuu",
        "meaning": "tarde, entardecer"
      }
    ],
    "mnemonic": "Empilhar incontáveis crepúsculos um em cima do outro, indicando que o tempo e a quantidade são muitos.",
    "parts_en": [
      "Evening"
    ],
    "meanings_en": [
      "Many",
      "^Much",
      "^Lots Of"
    ],
    "mnemonic_en": "You will live to see many evenings."
  },
  "少ない": {
    "parts": [
      {
        "char": "小",
        "name": "shou",
        "meaning": "pequeno"
      },
      {
        "char": "丿",
        "name": "no",
        "meaning": "marcação, divisão"
      }
    ],
    "mnemonic": "Tentar dividir ou cortar o que já é bem pequeno o torna extremamente pouco.",
    "parts_en": [
      "Small",
      "Slide"
    ],
    "meanings_en": [
      "Few",
      "^A Little"
    ],
    "mnemonic_en": "If you take something that is already small and slash at it a few times to break it into chunks, well, at the end you're going to end up only with a few pieces. If you'd had something bigger you could have broken it up into more chunks, but alas."
  },
  "早い": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      },
      {
        "char": "十",
        "name": "juu",
        "meaning": "cem, agulha, talo"
      }
    ],
    "mnemonic": "O grande sol da manhã subindo acima dos talos do campo muito cedo.",
    "parts_en": [
      "Sun",
      "Cross"
    ],
    "meanings_en": [
      "Early",
      "^Fast",
      "^Quick"
    ],
    "mnemonic_en": "The sun rises early in the morning, waaay before ten o'clock."
  },
  "遅い": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho, movimento"
      },
      {
        "char": "犀",
        "name": "sai",
        "meaning": "rinoceronte / gado lento"
      }
    ],
    "mnemonic": "Fazer uma viagem caminhando sobre algo muito rústico e devagar, como se fosse atrás de gado, o que faz tudo ficar tarde e atrasado.",
    "parts_en": [
      "Scooter",
      "Flag",
      "Sheep"
    ],
    "meanings_en": [
      "Slow"
    ],
    "mnemonic_en": ""
  },
  "近い": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "斤",
        "name": "ono",
        "meaning": "machado"
      }
    ],
    "mnemonic": "Pelo caminho, você precisou cortar uma distância tão curta que precisou de apenas uma machadada para ficar perto.",
    "parts_en": [
      "Scooter",
      "Axe"
    ],
    "meanings_en": [
      "Near",
      "^Close"
    ],
    "mnemonic_en": "If you see a bloody axe left on the road in the middle of the night then the killer is probably near."
  },
  "遠い": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "袁",
        "name": "en",
        "meaning": "longa vestimenta fluida"
      }
    ],
    "mnemonic": "Alguém com longas roupas fluidas que vão arrastando e se alongando cada vez mais no caminho rumo a um lugar distante.",
    "parts_en": [
      "Scooter",
      "Zombie"
    ],
    "meanings_en": [
      "Far"
    ],
    "mnemonic_en": "A thin person with their mouth agape holding a divining rod in their hand. He's on the road, looking far and wide for hidden treasure buried under the earth."
  },
  "右": {
    "parts": [
      {
        "char": "𠂇",
        "name": "te",
        "meaning": "mão direita"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      }
    ],
    "mnemonic": "A mão dominante direita conduzindo o alimento até a boca.",
    "parts_en": [
      "Narwhal",
      "Mouth"
    ],
    "meanings_en": [
      "Right"
    ],
    "mnemonic_en": ""
  },
  "左": {
    "parts": [
      {
        "char": "𠂇",
        "name": "te",
        "meaning": "mão esquerda"
      },
      {
        "char": "工",
        "name": "kou",
        "meaning": "ferramenta, ofício"
      }
    ],
    "mnemonic": "A mão esquerda apoiando e conduzindo a ferramenta durante o trabalho.",
    "parts_en": [
      "Narwhal",
      "Construction"
    ],
    "meanings_en": [
      "Left"
    ],
    "mnemonic_en": ""
  },
  "北": {
    "parts": [
      {
        "char": "匕",
        "name": "hi",
        "meaning": "pessoa (virada)"
      },
      {
        "char": "匕",
        "name": "hi",
        "meaning": "pessoa"
      }
    ],
    "mnemonic": "Duas pessoas sentadas uma de costas para a outra no norte frio, evitando o vento que congela.",
    "parts_en": [
      "Fingers",
      "Spoon"
    ],
    "meanings_en": [
      "North"
    ],
    "mnemonic_en": "A pictograph of a bird's eye view of a road leading north."
  },
  "南": {
    "parts": [
      {
        "char": "十",
        "name": "juu",
        "meaning": "dez, agulha"
      },
      {
        "char": "冂",
        "name": "keigamae",
        "meaning": "fronteira"
      },
      {
        "char": "¥",
        "name": "en",
        "meaning": "moeda (interior variante de ovelha)"
      }
    ],
    "mnemonic": "A agulha da bússola apontando dentro da cerca para o sul quente e ensolarado.",
    "parts_en": [
      "Cross",
      "Head",
      "Horns",
      "Dry"
    ],
    "meanings_en": [
      "South"
    ],
    "mnemonic_en": ""
  },
  "東": {
    "parts": [
      {
        "char": "木",
        "name": "ki",
        "meaning": "árvore"
      },
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      }
    ],
    "mnemonic": "O sol nascendo por trás de uma árvore indica o amanhecer no leste.",
    "parts_en": [
      "Tree",
      "Sun"
    ],
    "meanings_en": [
      "East"
    ],
    "mnemonic_en": "A pictograph of a rising sun behind a tree, representing east."
  },
  "西": {
    "parts": [
      {
        "char": "襾",
        "name": "nishi",
        "meaning": "ninho, cobrir"
      },
      {
        "char": "八",
        "name": "hachi",
        "meaning": "dividir / pernas"
      }
    ],
    "mnemonic": "Os pássaros voltando aos seus ninhos empoleirados quando o sol se põe no oeste.",
    "parts_en": [
      "West"
    ],
    "meanings_en": [
      "West"
    ],
    "mnemonic_en": ""
  },
  "前": {
    "parts": [
      {
        "char": "丷",
        "name": "hachi",
        "meaning": "chifres"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "linha"
      },
      {
        "char": "月",
        "name": "tsuki",
        "meaning": "lua / corpo"
      },
      {
        "char": "刂",
        "name": "ritto",
        "meaning": "faca"
      }
    ],
    "mnemonic": "Preparar a faca (espada) em *frente* ao corpo antes de avançar para a batalha.",
    "parts_en": [
      "Horns",
      "Ground",
      "Moon",
      "Knife"
    ],
    "meanings_en": [
      "Front",
      "^Before"
    ],
    "mnemonic_en": "If you're going to cut off someone's leg as a punishment in a gruesome ritual then you might as well do that in front of a creepy pair of antlers on a wall, right?"
  },
  "後ろ": {
    "parts": [
      {
        "char": "彳",
        "name": "gyouninben",
        "meaning": "passos"
      },
      {
        "char": "幺",
        "name": "itogashira",
        "meaning": "fio, pequeno"
      },
      {
        "char": "夂",
        "name": "nomofuyu",
        "meaning": "andar devagar"
      }
    ],
    "mnemonic": "Andar com passos pequenos e devagar faz você ficar muito atrás dos outros.",
    "parts_en": [
      "Loiter",
      "Poop",
      "Winter"
    ],
    "meanings_en": [
      "Behind",
      "^After",
      "^Back",
      "^Rear"
    ],
    "mnemonic_en": "It's going to be a late winter this year. The only winter clothes you have cannot be even called clothes anymore; they are so tattered that they are literally falling apart. Quickly, grab your thread spool and start sewing! There's no time to stand still! It's going to be too late after it gets too cold and you'll freeze to death due to lack of winter clothes!"
  },
  "今": {
    "parts": [
      {
        "char": "𠆢",
        "name": "yane",
        "meaning": "reunir, teto"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um"
      },
      {
        "char": "フ",
        "name": "fu",
        "meaning": "agora (curva)"
      }
    ],
    "mnemonic": "Reunir todas as coisas aqui e neste exato momento presente: o \"agora\".",
    "parts_en": [
      "Now"
    ],
    "meanings_en": [
      "Now"
    ],
    "mnemonic_en": "You hear an evil laughter from below. Fufufu. Crap! It's getting closer and closer! But where should you go? You're trapped here and you can only go down. There is one way — now is the time to go up on the sloped roof and escape!"
  },
  "毎": {
    "parts": [
      {
        "char": "𠂉",
        "name": "kanmuri",
        "meaning": "pessoa (mãe deitada)"
      },
      {
        "char": "母",
        "name": "haha",
        "meaning": "mãe"
      }
    ],
    "mnemonic": "A mãe cuidadosa sempre fazendo a mesma coisa de forma dedicada todo, *cada* dia.",
    "parts_en": [
      "Gun",
      "Window"
    ],
    "meanings_en": [
      "Every"
    ],
    "mnemonic_en": "My mother dresses up every Halloween as a cow, she even wears a cow head."
  },
  "週": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "周",
        "name": "shuu",
        "meaning": "dar a volta, ciclo"
      }
    ],
    "mnemonic": "O sol caminhando e dando a volta completa de 7 dias descreve uma semana.",
    "parts_en": [
      "Scooter",
      "Circumference"
    ],
    "meanings_en": [
      "Week"
    ],
    "mnemonic_en": ""
  },
  "朝": {
    "parts": [
      {
        "char": "十",
        "name": "juu",
        "meaning": "grama (antigamente)"
      },
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      },
      {
        "char": "月",
        "name": "tsuki",
        "meaning": "lua"
      }
    ],
    "mnemonic": "Aquele momento raro de manhã em que o sol já se levantou na grama, mas a lua ainda está no céu.",
    "parts_en": [
      "Cross",
      "Sun",
      "Moon"
    ],
    "meanings_en": [
      "Morning"
    ],
    "mnemonic_en": "When I woke up this morning I saw the moon. I guess I woke up really early, so I went back to sleep and... crap! It's ten o'clock already! I overslept!"
  },
  "夜": {
    "parts": [
      {
        "char": "亠",
        "name": "nabebuta",
        "meaning": "cabeça, noite"
      },
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "夕",
        "name": "yuu",
        "meaning": "entardecer"
      },
      {
        "char": "乀",
        "name": "migi",
        "meaning": "perna longa"
      }
    ],
    "mnemonic": "Uma pessoa estendendo totalmente sua perna para relaxar logo após o anoitecer.",
    "parts_en": [
      "Lid",
      "Leader",
      "Winter",
      "Drop"
    ],
    "meanings_en": [
      "Night",
      "^Evening"
    ],
    "mnemonic_en": "At night we put a lid on the troubles of the day and rest. Picture the thin person wrapped up snugly in the cozy late winter blankets like a tiny droplet."
  },
  "半": {
    "parts": [
      {
        "char": "丷",
        "name": "hachi",
        "meaning": "dividir"
      },
      {
        "char": "二",
        "name": "ni",
        "meaning": "dois"
      },
      {
        "char": "丨",
        "name": "tate-bou",
        "meaning": "linha de corte"
      }
    ],
    "mnemonic": "Uma grande faca cortando as duas linhas perfeitamente pelo meio (metade).",
    "parts_en": [
      "Triceratops",
      "Dry"
    ],
    "meanings_en": [
      "Half"
    ],
    "mnemonic_en": "A pictograph of a part of a fence that will be destroyed. There are three boards to smash, the first one is already in half and there are still two more to go"
  },
  "何": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "可",
        "name": "ka",
        "meaning": "possível, o quê, aprovar"
      }
    ],
    "mnemonic": "Uma pessoa carregando uma caixa e você pergunta \"O que é possível ser isso nas mãos dele?\".",
    "parts_en": [
      "Leader",
      "Lip Ring"
    ],
    "meanings_en": [
      "What"
    ],
    "mnemonic_en": "Imagine a really thin person lifting up a car. What?! Even such a thin person can do that?! It's a real thing actually, it's called hysterical strength."
  },
  "名前": {
    "parts": [
      {
        "char": "名",
        "name": "na",
        "meaning": "nome"
      },
      {
        "char": "前",
        "name": "mae",
        "meaning": "antes, frente"
      }
    ],
    "mnemonic": "No Japão, o \"nome\" que você escreve e chama é falado sempre *antes* (a frente) de qualquer título.",
    "parts_en": [
      "Evening",
      "Mouth"
    ],
    "meanings_en": [
      "Name",
      "^Famous"
    ],
    "mnemonic_en": "When you're having a date this evening with a girl you've anonymously met online it'd be the best to open your mouth and tell her your name before the sun sets and you'll go to your apartment to do the deed. Otherwise it'll be really awkward the next day when you wake up next to each other, in the same bed, and not know the other's name."
  },
  "友達": {
    "parts": [
      {
        "char": "友",
        "name": "tomo",
        "meaning": "amigo"
      },
      {
        "char": "達",
        "name": "tachi",
        "meaning": "plural, alcançar"
      }
    ],
    "mnemonic": "Diversos amigos caminhando juntos lado a lado para alcançar seus sonhos (plural de amigos).",
    "parts_en": [
      "Narwhal",
      "Stool"
    ],
    "meanings_en": [
      "Friend"
    ],
    "mnemonic_en": "If someone's once again by your side when your in trouble for the millionth time, you know you have a true friend."
  },
  "安全": {
    "parts": [
      {
        "char": "安",
        "name": "an",
        "meaning": "paz, calmo"
      },
      {
        "char": "全",
        "name": "zen",
        "meaning": "completo, todo"
      }
    ],
    "mnemonic": "Uma mulher debaixo do teto protegida traz \"paz\" e o rei debaixo do teto é \"total\", a união é \"segurança\".",
    "parts_en": [
      "Roof",
      "Woman"
    ],
    "meanings_en": [
      "Relax",
      "^Cheap"
    ],
    "mnemonic_en": "If you have a nice house with a roof with a chimney, and a woman living there who's waiting for you to come home from work, who loves you and keeps you warm at night, well, that brings a certain piece of mind when you think about it, doesn't it?"
  },
  "高校": {
    "parts": [
      {
        "char": "高",
        "name": "kou",
        "meaning": "alto"
      },
      {
        "char": "校",
        "name": "kou",
        "meaning": "escola"
      }
    ],
    "mnemonic": "A escola de nível mais alto onde os adolescentes estudam para a faculdade.",
    "parts_en": [
      "Lid",
      "Mouth",
      "Mustache"
    ],
    "meanings_en": [
      "Tall",
      "^Expensive",
      "^High"
    ],
    "mnemonic_en": "That is a really high two-story building. We have the mouth on the bottom being the entrance, the upside-down-box being the first floor, another mouth being the second floor widow, and a lid at the top being its roof."
  },
  "図書館": {
    "parts": [
      {
        "char": "図",
        "name": "to",
        "meaning": "diagrama, mapa"
      },
      {
        "char": "書",
        "name": "sho",
        "meaning": "escrever"
      },
      {
        "char": "館",
        "name": "kan",
        "meaning": "salão, prédio"
      }
    ],
    "mnemonic": "O grande edifício (salão) feito especialmente para armazenar diagramas e escritos.",
    "parts_en": [
      "Mouth",
      "Treasure",
      "Ice"
    ],
    "meanings_en": [
      "Diagram"
    ],
    "mnemonic_en": "A pictograph of a diagram which shows you place where the treasure is hidden, with a cross marking the spot where it is buried, and two drops of ink showing the directions to go."
  },
  "勉強": {
    "parts": [
      {
        "char": "勉",
        "name": "ben",
        "meaning": "esforço, trabalho duro"
      },
      {
        "char": "強",
        "name": "kyou",
        "meaning": "forte"
      }
    ],
    "mnemonic": "Somente se esforçando muito e usando força de vontade você consegue \"estudar\" com consistência.",
    "parts_en": [
      "Excuse",
      "Power"
    ],
    "meanings_en": [
      "Exertion"
    ],
    "mnemonic_en": "Those that have power are exempt from needing to try hard."
  },
  "仕事": {
    "parts": [
      {
        "char": "仕",
        "name": "shi",
        "meaning": "servir, fazer"
      },
      {
        "char": "事",
        "name": "goto",
        "meaning": "coisa, assunto, tarefa"
      }
    ],
    "mnemonic": "Servir a sociedade fazendo tarefas e prestando serviços configura um \"trabalho\".",
    "parts_en": [
      "Leader",
      "Samurai"
    ],
    "meanings_en": [
      "Doing",
      "^Do"
    ],
    "mnemonic_en": "A professional is a person who serves his clients or his boss for money. Even if he's a thin weakling, as a proper professional he will do his job!"
  },
  "電車": {
    "parts": [
      {
        "char": "電",
        "name": "den",
        "meaning": "eletricidade"
      },
      {
        "char": "車",
        "name": "sha",
        "meaning": "veículo"
      }
    ],
    "mnemonic": "O veículo comprido e com muitos vagões movido a eletricidade (trem).",
    "parts_en": [
      "Rain",
      "Rice Paddy",
      "Umbrella"
    ],
    "meanings_en": [
      "Electricity"
    ],
    "mnemonic_en": "An umbrella can protect you from the sun and from the rain, but it's not very effective against an electrical storm. If you get struck by a lightning it's over for you."
  },
  "病院": {
    "parts": [
      {
        "char": "病",
        "name": "byou",
        "meaning": "doente"
      },
      {
        "char": "院",
        "name": "in",
        "meaning": "instituição, pátio"
      }
    ],
    "mnemonic": "A grande instituição oficial de saúde desenhada para acolher as pessoas doentes.",
    "parts_en": [
      "Sick",
      "Dynamite"
    ],
    "meanings_en": [
      "Sick",
      "^Sickness",
      "^Ill",
      "^Illness"
    ],
    "mnemonic_en": ""
  },
  "思う": {
    "parts": [
      {
        "char": "田",
        "name": "ta",
        "meaning": "campo móvel / cérebro"
      },
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração"
      }
    ],
    "mnemonic": "Os antigos japoneses acreditavam que processar algo no cérebro e no coração representava \"pensar\".",
    "parts_en": [
      "Rice Paddy",
      "Heart"
    ],
    "meanings_en": [
      "Think",
      "^Thought"
    ],
    "mnemonic_en": "If you really think that something is true then even a whole rice field worth of evidence might not be enough to change your heart. People are really stubborn, you know?"
  },
  "知る": {
    "parts": [
      {
        "char": "矢",
        "name": "ya",
        "meaning": "flecha"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      }
    ],
    "mnemonic": "O conhecimento dispara de forma rápida e certeira como uma flecha saindo da boca de quem ensina.",
    "parts_en": [
      "Arrow",
      "Mouth"
    ],
    "meanings_en": [
      "Know"
    ],
    "mnemonic_en": "If you know an answer to something then that information will fly from your mouth like an arrow."
  },
  "作る": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "乍",
        "name": "nagara",
        "meaning": "fazer enquanto, serrote"
      }
    ],
    "mnemonic": "Uma pessoa serrando e batendo coisas simultaneamente para construir ou \"fazer\" um objeto.",
    "parts_en": [
      "Leader",
      "Key"
    ],
    "meanings_en": [
      "Make"
    ],
    "mnemonic_en": "While you're a really thin person, weak and feeble, you can still make things. Sure, you might not be able to do carpentry, or anything else that requires significant strength, but you can still make paper planes or something like that."
  },
  "教える": {
    "parts": [
      {
        "char": "孝",
        "name": "kou",
        "meaning": "piedade filial, aprender"
      },
      {
        "char": "攵",
        "name": "bokuzukuri",
        "meaning": "bater levemente, instruir"
      }
    ],
    "mnemonic": "Um instrutor dando tapinhas encorajadores nas costas de um pequeno aluno aprendendo.",
    "parts_en": [
      "Teacher",
      "Winter"
    ],
    "meanings_en": [
      "Teach"
    ],
    "mnemonic_en": "\"Fullfill your duty to your parents by sitting on this damn folding chair, and just let me teach you!\" said the teacher to a rowdy kid in his class.\nIn Asian cultures it's very important that you fulfill your duty to your parents. And when you're a kid you do that by paying attention at school and getting good grades."
  },
  "開ける": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portão"
      },
      {
        "char": "干",
        "name": "kan",
        "meaning": "puxar, secar, escudo"
      }
    ],
    "mnemonic": "Pegar o ferrolho ou as duas abas espessas do portão puxando para deixá-lo \"aberto\".",
    "parts_en": [
      "Gate",
      "Lantern"
    ],
    "meanings_en": [
      "Open"
    ],
    "mnemonic_en": "When you peek through the gate you can see a beautiful oriental lantern inside. The lantern is a little bit too bright so you can't see anything else; for that you'd need to open the gate and go inside."
  },
  "閉める": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portão"
      },
      {
        "char": "才",
        "name": "sai",
        "meaning": "tranca de madeira"
      }
    ],
    "mnemonic": "Pegar uma grande peça de madeira em formato de pino e atravessar no portão para deixá-lo \"fechado\".",
    "parts_en": [
      "Gate",
      "Genius"
    ],
    "meanings_en": [
      "Closed",
      "^Close",
      "^Closure"
    ],
    "mnemonic_en": "The gate is only open for talented people, so for you it might as well be considered closed."
  },
  "待つ": {
    "parts": [
      {
        "char": "彳",
        "name": "gyouninben",
        "meaning": "passos, caminho"
      },
      {
        "char": "寺",
        "name": "tera",
        "meaning": "templo"
      }
    ],
    "mnemonic": "Parar os passos na entrada de um templo sagrado para \"esperar\" pacientemente o monge.",
    "parts_en": [
      "Loiter",
      "Temple"
    ],
    "meanings_en": [
      "Wait"
    ],
    "mnemonic_en": "If you need a good place to wait then a Buddhist temple is going to be the perfect place to go to and stand still for a while among all of the meditating Buddhist monks."
  },
  "持つ": {
    "parts": [
      {
        "char": "扌",
        "name": "tehen",
        "meaning": "mão"
      },
      {
        "char": "寺",
        "name": "tera",
        "meaning": "templo"
      }
    ],
    "mnemonic": "Os monges tinham a mão sobre todos os relógios (marcadores de tempo), \"tendo\" ou segurando coisas preciosas.",
    "parts_en": [
      "Fingers",
      "Temple"
    ],
    "meanings_en": [
      "Hold"
    ],
    "mnemonic_en": "Some of the monks at a certain Buddhist temple in Japan are so dedicated to their training that they absolutely refuse to use their right hand. Instead they exclusively use their left hand to do whatever task is necessary, until they have reached enlightenment."
  },
  "使う": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "吏",
        "name": "ri",
        "meaning": "oficial, mensageiro"
      }
    ],
    "mnemonic": "O ato de uma pessoa despachar um oficial para \"usar\" os serviços da prefeitura.",
    "parts_en": [
      "Leader",
      "Ground",
      "History"
    ],
    "meanings_en": [
      "Use"
    ],
    "mnemonic_en": ""
  },
  "送る": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "关",
        "name": "sou",
        "meaning": "rir, tocha (variante)"
      }
    ],
    "mnemonic": "Para \"enviar\" a mensagem ou o mensageiro pelo caminho, eles seguram uma grande tocha.",
    "parts_en": [
      "Scooter",
      "Horns",
      "Heaven"
    ],
    "meanings_en": [
      "Send"
    ],
    "mnemonic_en": ""
  },
  "着く": {
    "parts": [
      {
        "char": "羊",
        "name": "hitsuji",
        "meaning": "ovelha"
      },
      {
        "char": "目",
        "name": "me",
        "meaning": "olho"
      }
    ],
    "mnemonic": "O pastor vestindo lã de ovelha (roupas) e usando os olhos para ver se a ovelha \"chega\" ao pasto.",
    "parts_en": [
      "Horns",
      "King",
      "Slide",
      "Eye"
    ],
    "meanings_en": [
      "Wear",
      "^Arrive"
    ],
    "mnemonic_en": "Why do people wear protective equipment? So that they eye doesn't get slashed by a force of nature they're working with, say, a wild animal like a bear or an explosive chemical reaction. Better be safe than sorry!\n(This kanji is usually used to mean \"wear\" from the shoulders down, so it excludes various form of facewear and eye protection, however you can imagine a full-body kevlar-reinforced body suit that would also cover your face.)"
  },
  "走る": {
    "parts": [
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra, chão"
      },
      {
        "char": "疋",
        "name": "hiki",
        "meaning": "pé em ação"
      }
    ],
    "mnemonic": "A imagem de uma pessoa avançando com o pé no chão aterrorizada (como se estivesse pisando), correndo.",
    "parts_en": [
      "Run"
    ],
    "meanings_en": [
      "Run"
    ],
    "mnemonic_en": "Running barefoot is a dangerous business. You can get splinters in your foot from stepping on the rocks and bare earth. So be sure to wear your running shoes before you go for a run!"
  },
  "売る": {
    "parts": [
      {
        "char": "士",
        "name": "shi",
        "meaning": "guerreiro, intelectual"
      },
      {
        "char": "冖",
        "name": "wakanmuri",
        "meaning": "teto"
      },
      {
        "char": "儿",
        "name": "ninnyo",
        "meaning": "pernas"
      }
    ],
    "mnemonic": "Aquele guerreiro sob o teto da tenda mostrando suas coisas aos passantes (pernas) para \"vender\".",
    "parts_en": [
      "Samurai",
      "Forehead",
      "Legs"
    ],
    "meanings_en": [
      "Sell"
    ],
    "mnemonic_en": "A professional is someone who goes out and sells his services to those who'd rather rest their legs underneath their cozy roof instead of doing the work themselves."
  },
  "借りる": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "昔",
        "name": "mukashi",
        "meaning": "antiguidade, tempo longo"
      }
    ],
    "mnemonic": "Uma pessoa que pediu algo emprestado por um bom e longo tempo desde as eras antigas.",
    "parts_en": [
      "Leader",
      "Long Ago"
    ],
    "meanings_en": [
      "Borrow"
    ],
    "mnemonic_en": ""
  },
  "切る": {
    "parts": [
      {
        "char": "七",
        "name": "shichi",
        "meaning": "sete (modificado p/ corte)"
      },
      {
        "char": "刀",
        "name": "katana",
        "meaning": "espada, faca"
      }
    ],
    "mnemonic": "Sete poderosos e rápidos golpes seguidos feitos usando uma faca afiada para \"cortar\" algo.",
    "parts_en": [
      "Seven",
      "Sword"
    ],
    "meanings_en": [
      "Cut"
    ],
    "mnemonic_en": "The katana is the best weapon to cut through seven things at once. Sharp!"
  },
  "広い": {
    "parts": [
      {
        "char": "广",
        "name": "madare",
        "meaning": "salão espaçoso, caverna"
      },
      {
        "char": "ム",
        "name": "mu",
        "meaning": "privado / cotovelo"
      }
    ],
    "mnemonic": "Um salão gigante onde você pode esticar os dois cotovelos completamente porque é mito *espaçoso*.",
    "parts_en": [
      "Canopy",
      "Private"
    ],
    "meanings_en": [
      "Wide"
    ],
    "mnemonic_en": ""
  },
  "強い": {
    "parts": [
      {
        "char": "弓",
        "name": "yumi",
        "meaning": "arco"
      },
      {
        "char": "ム",
        "name": "mu",
        "meaning": "cotovelo, dobrar"
      },
      {
        "char": "虫",
        "name": "mushi",
        "meaning": "inseto (antigo cavalo)"
      }
    ],
    "mnemonic": "Um arco flexível puxado pelo cotovelo do guerreiro com uma destreza de inseto é extremamente \"forte\".",
    "parts_en": [
      "Bow",
      "Private",
      "Insect"
    ],
    "meanings_en": [
      "Strong",
      "^Strength"
    ],
    "mnemonic_en": "A mutated insect with an arm of a bodybuilder instead of its head... Yes, this horryfing creature is probably going to be strong enough to pull on a bow."
  },
  "弱い": {
    "parts": [
      {
        "char": "弓",
        "name": "yumi",
        "meaning": "arco"
      },
      {
        "char": "彡",
        "name": "san-zukuri",
        "meaning": "pelos / asas pequenas"
      }
    ],
    "mnemonic": "Dois (repetidos) arcos extremamente minúsculos e flexíveis igual penas que atiram sem impacto, muito fracos.",
    "parts_en": [
      "Bow",
      "Ice"
    ],
    "meanings_en": [
      "Weak"
    ],
    "mnemonic_en": ""
  },
  "正しい": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um (linha de chegada)"
      },
      {
        "char": "止",
        "name": "tomeru",
        "meaning": "parar, pisada"
      }
    ],
    "mnemonic": "Pisar perfeitamente na linha reta da moral, da verdade, a conduta correta na sociedade.",
    "parts_en": [
      "Ground",
      "Stop"
    ],
    "meanings_en": [
      "Correct"
    ],
    "mnemonic_en": "You stop once you get one correct answer."
  },
  "家": {
    "parts": [
      {
        "char": "宀",
        "name": "ukanmuri",
        "meaning": "teto"
      },
      {
        "char": "豕",
        "name": "inoko",
        "meaning": "porco"
      }
    ],
    "mnemonic": "Antigamente, você tinha que morar sob um teto tendo um porco criado na cozinha para manter a \"casa\" e o lar.",
    "parts_en": [
      "Roof",
      "Pig"
    ],
    "meanings_en": [
      "House",
      "^Home"
    ],
    "mnemonic_en": "A nice house with a roof with a chimney is not a place to keep a wild pig."
  },
  "地": {
    "parts": [
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra"
      },
      {
        "char": "也",
        "name": "ya",
        "meaning": "escorpião / espalhar"
      }
    ],
    "mnemonic": "A imagem da terra se espalhando horizontalmente e verticalmente como uma cordilheira até onde a vista alcança (solo/lugar).",
    "parts_en": [
      "Dirt",
      "Alligator"
    ],
    "meanings_en": [
      "Earth",
      "^Ground"
    ],
    "mnemonic_en": "To be in the earth is to be under ground."
  },
  "工": {
    "parts": [
      {
        "char": "工",
        "name": "kou",
        "meaning": "pilar de sustentação, trabalho"
      }
    ],
    "mnemonic": "Um pilar erguido no chão para sustentar o teto. Símbolo do construtor e engenheiro de obras.",
    "parts_en": [
      "Construction"
    ],
    "meanings_en": [
      "Construction",
      "^Industry"
    ],
    "mnemonic_en": "A pictograph of a steel I-beam used during construction."
  },
  "自": {
    "parts": [
      {
        "char": "自",
        "name": "ji",
        "meaning": "nariz, o próprio"
      }
    ],
    "mnemonic": "Um close do nariz em uma face. No Japão como no oriente, apontar pro nariz significa \"Eu próprio\".",
    "parts_en": [
      "Self"
    ],
    "meanings_en": [
      "Self"
    ],
    "mnemonic_en": "When your eye burns and itches it's time to self-medicate and put a drop of eyedrops in you eye."
  },
  "世": {
    "parts": [
      {
        "char": "世",
        "name": "se",
        "meaning": "mundo, geração"
      }
    ],
    "mnemonic": "A junção e ramificação de 3 cruzes (trinta) indicando um período normal de trinta anos para repassar as coisas ao globo: uma geração.",
    "parts_en": [
      "World"
    ],
    "meanings_en": [
      "World",
      "^Generation"
    ],
    "mnemonic_en": "At the start of the twentieth century we had two huge world wars which claimed a lot of lives. You can still see how the world was back then by looking at the pictures from that era, pictures that sit now in a picture frame."
  },
  "運": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "軍",
        "name": "gun",
        "meaning": "exército / carruagem com teto (車+冖)"
      }
    ],
    "mnemonic": "Movimentar imensos exércitos caminhando do oriente para cá \"transportando\" coisas. Requer muita sorte militar.",
    "parts_en": [
      "Scooter",
      "Forehead",
      "Car"
    ],
    "meanings_en": [
      "Carry",
      "^Luck"
    ],
    "mnemonic_en": "An army on the road carrying weapons and supplies."
  },
  "転": {
    "parts": [
      {
        "char": "車",
        "name": "kuruma",
        "meaning": "carro, veículo"
      },
      {
        "char": "云",
        "name": "iu",
        "meaning": "nuvem (rodopiando)"
      }
    ],
    "mnemonic": "Um carro no qual a roda está rodopiando tão ferozmente que parece rodar, rolar e girar igual uma nuvem solta e transferir o veículo.",
    "parts_en": [
      "Car",
      "Cloud"
    ],
    "meanings_en": [
      "Revolve"
    ],
    "mnemonic_en": "To quote my favorite vehicle related poem, the wheels on the bus go round and round... in other words they roll around."
  },
  "色": {
    "parts": [
      {
        "char": "ク",
        "name": "ku",
        "meaning": "vínculo, segurar (topo)"
      },
      {
        "char": "巴",
        "name": "tomoe",
        "meaning": "cauda chata / corpo humano"
      }
    ],
    "mnemonic": "Historicamente o blush e a maquiagem para colorir o corpo era aplicado pelas pessoas. A fisionomia de rosto colorido, a cor.",
    "parts_en": [
      "Color"
    ],
    "meanings_en": [
      "Color"
    ],
    "mnemonic_en": "You want to color your hook? Just dip it into that that liquid over there which looks like a swirly pattern. That's paint. Lots of paints mixed together. That's why it's swirly."
  },
  "同": {
    "parts": [
      {
        "char": "冂",
        "name": "keigamae",
        "meaning": "contorno externo / tampa"
      },
      {
        "char": "一",
        "name": "ichi",
        "meaning": "um"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      }
    ],
    "mnemonic": "Toda a caixa tendo \"uma mesma boca\", uma mesma regra e um mesmo compasso para estar harmonioso (igual).",
    "parts_en": [
      "Mustache",
      "Ground"
    ],
    "meanings_en": [
      "Same"
    ],
    "mnemonic_en": "When it's under an upside-down box one mouth is going to feel the same as any other.\nThere is a certain traditional wedding game in Eastern Europe where a blindfolded groom gropes the legs of women in search for his wife; he wins if he can find his wife by touch alone. Imagine a similar game, but instead of blindfolding the groom we put all of the women in cardboard boxes, and then he just reaches with his hands underneath the box and gropes their mouths instlead of legs. Would you be able to tell one person from another just by touching their mouth?"
  },
  "場": {
    "parts": [
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra"
      },
      {
        "char": "昜",
        "name": "you",
        "meaning": "sol brilhante, local amplo"
      }
    ],
    "mnemonic": "A imagem de uma grande terra ou praça onde os fortes raios de sol brilham (como um estádio): um local.",
    "parts_en": [
      "Dirt",
      "Easy"
    ],
    "meanings_en": [
      "Location",
      "^Place"
    ],
    "mnemonic_en": "If you want to know the precise location of a floating clump of earth (an asteroid) you need to look at the light of the sun that is reflected off of it."
  },
  "所": {
    "parts": [
      {
        "char": "戸",
        "name": "ko",
        "meaning": "porta, aba"
      },
      {
        "char": "斤",
        "name": "ono",
        "meaning": "machado"
      }
    ],
    "mnemonic": "O \"local\" específico na casa (perto da porta) onde fica protegido ou erguido o pesado machado.",
    "parts_en": [
      "Door",
      "Axe"
    ],
    "meanings_en": [
      "Place"
    ],
    "mnemonic_en": "\"We need to get into that place! Quickly — grab that axe and just smash the door with it!\""
  },
  "死": {
    "parts": [
      {
        "char": "歹",
        "name": "gatsuhen",
        "meaning": "ossos pélvicos, morte"
      },
      {
        "char": "匕",
        "name": "hi",
        "meaning": "pessoa ajoelhada, cauda"
      }
    ],
    "mnemonic": "O lamentável instante onde restam apenas restos mortais (ossos) ao lado de uma pessoa prostrada no chão, indicando a morte.",
    "parts_en": [
      "Yakuza",
      "Spoon"
    ],
    "meanings_en": [
      "Death"
    ],
    "mnemonic_en": "Long after your death the only thing left of you will be your bone remains. And maybe your spoon, if it was made out of metal."
  },
  "通": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "甬",
        "name": "you",
        "meaning": "tubo, caminho cilíndrico"
      }
    ],
    "mnemonic": "Passar por caminhos e vias expressas (como que fluindo por um grande túnel e tubo sem bloqueios), ir pelo trajeto.",
    "parts_en": [
      "Scooter",
      "Mama",
      "Task"
    ],
    "meanings_en": [
      "Pass Through"
    ],
    "mnemonic_en": "You're on the road and you see this huge, rusty old bell, ringing. \"Look — they're ringing the bell because they're closing the gates! Let's go! Quickly! We need to pass through before the bell stops ringing and they shut the gates!\""
  },
  "考える": {
    "parts": [
      {
        "char": "老",
        "name": "oi",
        "meaning": "velho (topo modificado)"
      },
      {
        "char": "丂",
        "name": "kou",
        "meaning": "bengala, ar superior"
      }
    ],
    "mnemonic": "Um mestre ancião velho inclinado e amparado em sua bengala focando toda a sua experiência do ambiente em uma profunda reflexão e reflexão em pensamento.",
    "parts_en": [
      "Coffin",
      "Beggar"
    ],
    "meanings_en": [
      "Think",
      "^Consider"
    ],
    "mnemonic_en": "If you think about being put in an old grave, being under all of that earth with no way out and eventually not being able to breathe due to running out of air... that's a terrifying thought, isn't it?\nThis kanji depicts this situation in a pictographic way — at the top we have the grave itself, and underneath is you, unable to breath."
  },
  "届ける": {
    "parts": [
      {
        "char": "尸",
        "name": "shikabane",
        "meaning": "telhado envergado"
      },
      {
        "char": "由",
        "name": "yuu",
        "meaning": "brotar, chegar na ponta"
      }
    ],
    "mnemonic": "Chegar na varanda, sob uma abóbada com os documentos. Deixar despontar a sua chegada, uma encomenda ou pedido (notificando).",
    "parts_en": [
      "Flag",
      "Reason"
    ],
    "meanings_en": [
      "Deliver"
    ],
    "mnemonic_en": ""
  },
  "明るい": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol"
      },
      {
        "char": "月",
        "name": "tsuki",
        "meaning": "lua"
      }
    ],
    "mnemonic": "A luz do sol somada com a luz da lua representa o máximo do \"brilho\" e claridade possível da natureza.",
    "parts_en": [
      "Sun",
      "Moon"
    ],
    "meanings_en": [
      "Bright"
    ],
    "mnemonic_en": "With the moon and the sun shining at the same time it will surely be bright in here."
  },
  "悪い": {
    "parts": [
      {
        "char": "亜",
        "name": "a",
        "meaning": "subalterno, deformação, corcunda"
      },
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração"
      }
    ],
    "mnemonic": "Ter um coração esmagado, torto ou oprimido, cheio de deformação, é a raiz de alguém ruim, mal.",
    "parts_en": [
      "Asia",
      "Heart"
    ],
    "meanings_en": [
      "Bad",
      "^Evil"
    ],
    "mnemonic_en": "The heart of Asia is apparently in Afghanistan, where a lot of bad things are happening. War. Poverty. Terrorism. Corruption."
  },
  "意味": {
    "parts": [
      {
        "char": "音",
        "name": "oto",
        "meaning": "som"
      },
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração, ideia"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca"
      },
      {
        "char": "未",
        "name": "mi",
        "meaning": "ainda não"
      }
    ],
    "mnemonic": "O \"som\" do \"coração\" é o significado da ideia (Ideia). Uma \"boca\" que \"ainda não\" terminou o galho experimentando algo (Sabor) determina o Sentido.",
    "parts_en": [
      "Sound",
      "Heart"
    ],
    "meanings_en": [
      "Idea"
    ],
    "mnemonic_en": "When you come up with a great idea you get so excited that your heart starts beating so fast and so hard that you can hear the sound of your own heartbeat."
  },
  "運動": {
    "parts": [
      {
        "char": "辶",
        "name": "shinnyou",
        "meaning": "caminho"
      },
      {
        "char": "軍",
        "name": "gun",
        "meaning": "exército / carruagem com teto (車+冖)"
      },
      {
        "char": "重",
        "name": "omoi",
        "meaning": "pesado (carro+aldeia)"
      },
      {
        "char": "力",
        "name": "chikara",
        "meaning": "força"
      }
    ],
    "mnemonic": "Transportar exércitos pelo caminho (Mover) usando a grande força para aguentar as cargas pesadas (Ação).",
    "parts_en": [
      "Scooter",
      "Forehead",
      "Car"
    ],
    "meanings_en": [
      "Carry",
      "^Luck"
    ],
    "mnemonic_en": "An army on the road carrying weapons and supplies."
  },
  "音楽": {
    "parts": [
      {
        "char": "立",
        "name": "tatsu",
        "meaning": "ficar em pé"
      },
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol / bater ponto"
      },
      {
        "char": "白",
        "name": "shiro",
        "meaning": "branco"
      },
      {
        "char": "木",
        "name": "ki",
        "meaning": "árvore (prancha de madeira musical)"
      }
    ],
    "mnemonic": "Levantar para proclamar (som). E tocar as pedras de jade batendo na placa de carvalho branco para trazer a alegria (música).",
    "parts_en": [
      "Stand",
      "Sun"
    ],
    "meanings_en": [
      "Sound"
    ],
    "mnemonic_en": "Imagine physically standing on the surface a sun. I'd be so hot that the only sound you'd be making is a horrific scream. \"Aaaaaaaaaaaaah! IT BURNS!\""
  },
  "会話": {
    "parts": [
      {
        "char": "人",
        "name": "hito",
        "meaning": "pessoa"
      },
      {
        "char": "云",
        "name": "iu",
        "meaning": "nuvem / dizer"
      },
      {
        "char": "言",
        "name": "gonben",
        "meaning": "dizer"
      },
      {
        "char": "舌",
        "name": "shita",
        "meaning": "língua"
      }
    ],
    "mnemonic": "Muitas pessoas sobre um mesmo teto conversando em \"Encontro\". A \"fala\" articulada pela \"Fala/Língua\" formando o Diálogo."
  },
  "関係": {
    "parts": [
      {
        "char": "門",
        "name": "mon",
        "meaning": "portão duplo"
      },
      {
        "char": "糸",
        "name": "ito",
        "meaning": "fio"
      },
      {
        "char": "人",
        "name": "hito",
        "meaning": "pessoas (modificado / batendo)"
      }
    ],
    "mnemonic": "Trancar o portão atando com dezenas de fios duplos para formar a conexão ou \"Relação\", conectando ambas as coisas e interligando os fios.",
    "parts_en": [
      "Gate",
      "Horns",
      "Heaven"
    ],
    "meanings_en": [
      "Related",
      "^Connected"
    ],
    "mnemonic_en": "It's a gate that is connected to both heaven and hell through a pair of demonic horns."
  },
  "教育": {
    "parts": [
      {
        "char": "孝",
        "name": "kou",
        "meaning": "dever filial, obedecer velhos"
      },
      {
        "char": "攵",
        "name": "bokuzukuri",
        "meaning": "bater levemente, instruir"
      },
      {
        "char": "子",
        "name": "ko",
        "meaning": "filho (virado)"
      },
      {
        "char": "月",
        "name": "nikuzuki",
        "meaning": "carne, corpo"
      }
    ],
    "mnemonic": "O mais novo aprendendo através das instruções severas. E criar a \"carne/ventre\" o novo bebê gerando nutrição para \"Crescer\"."
  },
  "計画": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "dizer"
      },
      {
        "char": "十",
        "name": "ju",
        "meaning": "dez (marcar o compasso)"
      },
      {
        "char": "聿",
        "name": "fude",
        "meaning": "pincel"
      },
      {
        "char": "田",
        "name": "ta",
        "meaning": "campo"
      }
    ],
    "mnemonic": "Usar as palavras corretas para contar a precisão de um grande plano. Usar o pincel no campo para dividir o terreno e criar a \"demarcação\" (Planejar)."
  },
  "結論": {
    "parts": [
      {
        "char": "糸",
        "name": "ito",
        "meaning": "fio, laço"
      },
      {
        "char": "吉",
        "name": "kichi",
        "meaning": "boa sorte, excelente"
      },
      {
        "char": "言",
        "name": "gonben",
        "meaning": "palavra, dizer"
      },
      {
        "char": "侖",
        "name": "rin",
        "meaning": "rolos de bambu enrolados, lógica"
      }
    ],
    "mnemonic": "Juntar os fios de uma excelente discussão (Conectar, amarrar). Somar a eloquência da fala que organiza lógica e documentos (Discutir)."
  },
  "工場": {
    "parts": [
      {
        "char": "工",
        "name": "kou",
        "meaning": "ferramenta, ofício, régua"
      },
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra"
      },
      {
        "char": "昜",
        "name": "you",
        "meaning": "fazer subir, expansão sob o sol"
      }
    ],
    "mnemonic": "O local do mestre de ofício (o fabricante). Somado a uma terra gigantesca ensolarada onde as barracas operam para a Fábrica."
  },
  "時間": {
    "parts": [
      {
        "char": "日",
        "name": "hi",
        "meaning": "sol, dia"
      },
      {
        "char": "寺",
        "name": "tera",
        "meaning": "templo"
      },
      {
        "char": "門",
        "name": "mon",
        "meaning": "portão frontal"
      }
    ],
    "mnemonic": "Verificar os raios de sol nas marcações solares budistas do templo (Tempo), usando a fresta dos potões (Duração/Intervalo)."
  },
  "事実": {
    "parts": [
      {
        "char": "一",
        "name": "ichi",
        "meaning": "chão/suporte"
      },
      {
        "char": "口",
        "name": "kuchi",
        "meaning": "boca c/ incenso"
      },
      {
        "char": "ヨ",
        "name": "yo",
        "meaning": "mão (empunhando pincel)"
      }
    ],
    "mnemonic": "Realizar ações documentadas em mãos. O \"Fato\" em \"Realidade\" e verdade, ou \"sincero\" o interior de uma fruta (O preenchido)."
  },
  "住所": {
    "parts": [
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa"
      },
      {
        "char": "主",
        "name": "nushi",
        "meaning": "chefe, principal (lâmpada queima)"
      },
      {
        "char": "戸",
        "name": "to",
        "meaning": "porta, aba"
      },
      {
        "char": "斤",
        "name": "ono",
        "meaning": "machado, arma"
      }
    ],
    "mnemonic": "O Mestre supremo descansando no seu \"Lugar de viver\". Em um ponto ou \"Local\" sob estrita vigilância de portões e armas. Endereço doméstico."
  },
  "生活": {
    "parts": [
      {
        "char": "生",
        "name": "sei",
        "meaning": "viver"
      },
      {
        "char": "氵",
        "name": "sanzui",
        "meaning": "água"
      },
      {
        "char": "舌",
        "name": "shita",
        "meaning": "língua profunda"
      }
    ],
    "mnemonic": "A força do nascer e de \"Viver\" combinada com as águas vigorosas que abastecem a raiz e correm velozes pelo corpo (Vital). Sobrevivência."
  },
  "世界": {
    "parts": [
      {
        "char": "世",
        "name": "sei",
        "meaning": "o mundo, geração, era"
      },
      {
        "char": "田",
        "name": "ta",
        "meaning": "campo"
      },
      {
        "char": "介",
        "name": "kai",
        "meaning": "imprensado, intermediário"
      }
    ],
    "mnemonic": "Por uma inteira Era e humanidade do globo terrestre. Todos os campos divididos que delimitam um Domínio, Reino ou Limite (O Mundo)."
  },
  "絶対": {
    "parts": [
      {
        "char": "糸",
        "name": "ito",
        "meaning": "fio, linha"
      },
      {
        "char": "色",
        "name": "iro",
        "meaning": "cor (espada de duas perigosas faces cortantes)"
      },
      {
        "char": "対",
        "name": "tai",
        "meaning": "oposição / encarando de pé"
      }
    ],
    "mnemonic": "Cortar os laços permanentemente em uma extremidade Absoluta. Permanecendo estático de ambos os lados encaramdo a decisão \"Oposta\"."
  },
  "先生": {
    "parts": [
      {
        "char": "先",
        "name": "sen",
        "meaning": "anteriomente"
      },
      {
        "char": "生",
        "name": "sei",
        "meaning": "nascer"
      }
    ],
    "mnemonic": "Alguém que usou as pernas e rumou em sua jornada \"Previamente\", que já nasceu \"Antes\" de você, garantindo a posição de grande guia."
  },
  "大学": {
    "parts": [
      {
        "char": "大",
        "name": "dai",
        "meaning": "grande"
      },
      {
        "char": "学",
        "name": "gaku",
        "meaning": "estudo, aprendizagem"
      }
    ],
    "mnemonic": "Homens adultos \"Grandiosos\", com as mentes abertas para buscar as coroas (telhados) da maior das erudições e \"Aprendizados\"."
  },
  "注意": {
    "parts": [
      {
        "char": "氵",
        "name": "sanzui",
        "meaning": "água, fluir/derramar"
      },
      {
        "char": "主",
        "name": "nushi",
        "meaning": "mestre, o próprio dono"
      },
      {
        "char": "音",
        "name": "oto",
        "meaning": "som do coração, ideias"
      },
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração interior"
      }
    ],
    "mnemonic": "Despejar (Derramar o fluxo) a totalidade exata das ideias mais importantes e focar todo o \"Significado/Vontade\" em uma só pessoa. O Alerta."
  },
  "電話": {
    "parts": [
      {
        "char": "雨",
        "name": "ame",
        "meaning": "chuva, natureza dos deuses"
      },
      {
        "char": "申",
        "name": "mousu",
        "meaning": "raio explodindo, falar"
      },
      {
        "char": "言",
        "name": "gonben",
        "meaning": "dizer"
      },
      {
        "char": "舌",
        "name": "shita",
        "meaning": "língua"
      }
    ],
    "mnemonic": "A incrível força cortante celeste da (Eletricidade e Raio) que agora permite a rápida fonação e (Papo/Fala) a grandes distâncias."
  },
  "特急": {
    "parts": [
      {
        "char": "牛",
        "name": "ushi",
        "meaning": "boi (sacrifício especial)"
      },
      {
        "char": "寺",
        "name": "tera",
        "meaning": "templo oficial"
      },
      {
        "char": "心",
        "name": "kokoro",
        "meaning": "coração correndo"
      },
      {
        "char": "及",
        "name": "kyuu",
        "meaning": "agarrar apressadamente, perigo"
      }
    ],
    "mnemonic": "Oferecer um boi sagrado em uma ocasião perfeitamente Especial (Destaque). Somado com o sentimento de perigo apertando e Forçando as ações com Urgência extrema."
  },
  "発表": {
    "parts": [
      {
        "char": "癶",
        "name": "hatsugashira",
        "meaning": "pernas saltando e firmando (tiro longo)"
      },
      {
        "char": "衣",
        "name": "koromo",
        "meaning": "roupas de origem, base"
      },
      {
        "char": "表",
        "name": "omote",
        "meaning": "aparência externa, rosto para cima (vestes peludas do exterior)"
      }
    ],
    "mnemonic": "Uma flecha sendo Lançada / Emitida livremente pelos céus e exibindo pela a Superfície todo o brilhantismo (O anúncio Exposto de alguém)."
  },
  "確認": {
    "parts": [
      {
        "char": "石",
        "name": "ishi",
        "meaning": "pedra (peso duradouro)"
      },
      {
        "char": "冖",
        "name": "wa",
        "meaning": "cabeça / chapéu alto cobrindo o pássaro firme (falcão)"
      },
      {
        "char": "隹",
        "name": "furutori",
        "meaning": "passarinho da caça"
      },
      {
        "char": "言",
        "name": "gonben",
        "meaning": "fala (da tolerância e aprovação)"
      },
      {
        "char": "忍",
        "name": "nin",
        "meaning": "lâmina no coração escondida (suportar)"
      }
    ],
    "mnemonic": "É tão Certo e Sólido quanto acertar com uma pedra um passarinho (Precisão garantida). \"Reconhecer\" algo através de palavras após suportar em tolerância contínua os testes. Garantir.",
    "parts_en": [
      "Stone",
      "Forehead",
      "Turkey"
    ],
    "meanings_en": [
      "Certain"
    ],
    "mnemonic_en": "An old bird with its head stuck in a hole in the roof, so it cannot move. If you take the stone that's lying next to it and throw it at the bird you'll be certain to hit it."
  },
  "政治": {
    "parts": [
      {
        "char": "正",
        "name": "sei",
        "meaning": "o certo / correção militar sob a capital"
      },
      {
        "char": "攵",
        "name": "bokuzukuri",
        "meaning": "bater com o galho / reprimir por trás"
      },
      {
        "char": "氵",
        "name": "sanzui",
        "meaning": "água, rio domado"
      },
      {
        "char": "台",
        "name": "dai",
        "meaning": "plataforma da base grande e sólida"
      }
    ],
    "mnemonic": "A autoridade militar punitiva usada violentamente e retificando os caminhos da moral 'Política'. O controle que regula, gerencia ou (Cura / Conserta) os grandes leitos d'água pacificados.",
    "parts_en": [
      "Correct",
      "Winter"
    ],
    "meanings_en": [
      "Politics",
      "^Government"
    ],
    "mnemonic_en": ""
  },
  "文化": {
    "parts": [
      {
        "char": "文",
        "name": "bun",
        "meaning": "linhas cruzadas dos ideogramas entalhados"
      },
      {
        "char": "亻",
        "name": "ninben",
        "meaning": "pessoa reta em pé normal"
      },
      {
        "char": "匕",
        "name": "hi",
        "meaning": "pessoa de ponta-cabeça e tombada/virada (metamorfose)"
      }
    ],
    "mnemonic": "As intrincadas \"Letras\", a Arte antiga de gravar tatuagens, rituais ou textos e literatura. E transformar (Mudar magicamente / Disfarçar) a sociedade em magia civil de costume e sabedoria herdada.",
    "parts_en": [
      "Writing"
    ],
    "meanings_en": [
      "Writing",
      "^Sentence"
    ],
    "mnemonic_en": "You have homework to do. You need to write an essay — a bunch of sentences strung together into one coherent story. But you don't have anything to sit on... Your only folding chair broke, and you only have the folding chair legs... Hey, I know! Just put a lid on it and you should be able to sit down! Yeah, the handle of the lid might might be a little bit uncomfortable when you sit on it, but what else can do you?"
  },
  "自然": {
    "parts": [
      {
        "char": "自",
        "name": "ji",
        "meaning": "nariz \"eu\", si mesmo inerente"
      },
      {
        "char": "肉",
        "name": "niku",
        "meaning": "carne, carne do cão sacrificado assando"
      },
      {
        "char": "犬",
        "name": "inu",
        "meaning": "cachorro da base da fogueira sagrada"
      },
      {
        "char": "灬",
        "name": "renga",
        "meaning": "quatro chamas de labareda inferior"
      }
    ],
    "mnemonic": "O princípio que Emana de Si Próprio (\"Mim mesmo\", \"Pessoal\", \"Auto\") da existência, que assim seja feito como fato sem dúvida. Assar inteiramente um porquinho cão em labaredas violentas. Estar e Ser De Fato e Verdadeiramente natural.",
    "parts_en": [
      "Self"
    ],
    "meanings_en": [
      "Self"
    ],
    "mnemonic_en": "When your eye burns and itches it's time to self-medicate and put a drop of eyedrops in you eye."
  },
  "環境": {
    "parts": [
      {
        "char": "王",
        "name": "ou(tama)",
        "meaning": "joia / pedra atada como penduricalho da reitoria e do juiz amarrada em cordas"
      },
      {
        "char": "睘",
        "name": "kan",
        "meaning": "pessoa apavorada amordaçada e rodando (Circundante) - olho+gola da veste"
      },
      {
        "char": "土",
        "name": "tsuchi",
        "meaning": "terra dos deuses que definimos com barreiras na antiguidade"
      },
      {
        "char": "竟",
        "name": "kyou",
        "meaning": "o fim da batida final do dia, extremidade máxima limitante sonora na fronteira de rituais"
      }
    ],
    "mnemonic": "As joias brilhantes dos juizes usadas de cinto pelos oficias reais vigiando os arredores (O anel e entorno). O local onde a terra se acaba marcando exatamente o limiar em que o sino musical humano toca na Fronteira/Circunstância (O escopo da situação).",
    "parts_en": [
      "King",
      "Net",
      "Zombie"
    ],
    "meanings_en": [
      "Loop"
    ],
    "mnemonic_en": ""
  },
  "将来": {
    "parts": [
      {
        "char": "将",
        "name": "shou",
        "meaning": "General com carne, punho e polegar focado e prancheta apontando ou preparando o avanço do abate"
      },
      {
        "char": "来",
        "name": "rai",
        "meaning": "espigas de trigos vindo de muito longe abençoando a raiz para as lavouras antigas"
      }
    ],
    "mnemonic": "O bravo general estrategista (\"Líder\") assumindo as tropas para de \"Acampar\" e guiá-las nas batalhas Prestes A Acontecer. Algo de colheitas gloriosas que \"Virão\" para nós se plantar-mos agora na humanidade vindoura no amanhã.",
    "parts_en": [
      "Commander"
    ],
    "meanings_en": [
      "Commander"
    ],
    "mnemonic_en": ""
  },
  "説明": {
    "parts": [
      {
        "char": "言",
        "name": "gonben",
        "meaning": "apelo, palavras, boca clamorosa de discurso"
      },
      {
        "char": "兌",
        "name": "da",
        "meaning": "despir a pele/veludo. Despir a verdade com o sorriso irmão"
      },
      {
        "char": "日",
        "name": "hi",
        "meaning": "o grande e radiante sol e chama celeste ilumina"
      },
      {
        "char": "月",
        "name": "tsuki",
        "meaning": "a prata e noturna lua de luz clara pálida sem neblinas"
      }
    ],
    "mnemonic": "Tirar uma \"Teoria\", pregações doutrinantes, as falas de discursos (\"Opiniões e Rumores\"). Trazer toda a \"Claridade\", a lucidez que afasta a ignorância e deixa transparente, brilhante e Inteligente para Expor a teoria final.",
    "parts_en": [
      "Say",
      "Guard"
    ],
    "meanings_en": [
      "Theory"
    ],
    "mnemonic_en": ""
  },
  "映画": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Sun",
      "Center"
    ],
    "meanings_en": [
      "Reflect",
      "^Reflection"
    ],
    "mnemonic_en": ""
  },
  "感じ": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Slide",
      "Drunkard",
      "Creeper",
      "Heart"
    ],
    "meanings_en": [
      "Feeling"
    ],
    "mnemonic_en": "When you remember the dog you had as a kid that tragically died in a car accident your mouth opens and a painful groan comes out and you heart starts to ache in a sudden rush of feelings."
  },
  "急ぐ": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Prison",
      "Wolverine",
      "Heart"
    ],
    "meanings_en": [
      "Hurry"
    ],
    "mnemonic_en": ""
  },
  "好き": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Woman",
      "Child"
    ],
    "meanings_en": [
      "Like"
    ],
    "mnemonic_en": "Every decent woman likes her child and will do anything to keep the little Timmy happy."
  },
  "心配": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Heart"
    ],
    "meanings_en": [
      "Heart"
    ],
    "mnemonic_en": "A pictograph of a heart."
  },
  "始める": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Woman",
      "Machine"
    ],
    "meanings_en": [
      "Begin",
      "^Start"
    ],
    "mnemonic_en": "The woman standing next to a pedestal at the race waves the flag, signalling when to begin."
  },
  "勝つ": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Moon",
      "Gladiator",
      "Power"
    ],
    "meanings_en": [
      "Win"
    ],
    "mnemonic_en": "Imagine an evil husband calling forth an equally evil power from the underground next to a full moon at night... Yes, that demonic power is going to help him win in court and divorce his wife!"
  },
  "色々": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Color"
    ],
    "meanings_en": [
      "Color"
    ],
    "mnemonic_en": "You want to color your hook? Just dip it into that that liquid over there which looks like a swirly pattern. That's paint. Lots of paints mixed together. That's why it's swirly."
  },
  "集める": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Turkey",
      "Tree"
    ],
    "meanings_en": [
      "Collect",
      "^Gather"
    ],
    "mnemonic_en": "Sometimes old birds like to gather together on top of a tree and poop on anyone unfortunate enough to walk under that tree."
  },
  "重い": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Heavy"
    ],
    "meanings_en": [
      "Heavy"
    ],
    "mnemonic_en": "Over a thousand folk call this their home village, it must be a heavy responsibility for the village chief to take care of it."
  },
  "春": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Spring",
      "Sun"
    ],
    "meanings_en": [
      "Spring"
    ],
    "mnemonic_en": "Spring is when three people can come together and enjoy the sun, especially when it's low on the horizon and dyes everything orange."
  },
  "転ぶ": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Car",
      "Cloud"
    ],
    "meanings_en": [
      "Revolve"
    ],
    "mnemonic_en": "To quote my favorite vehicle related poem, the wheels on the bus go round and round... in other words they roll around."
  },
  "通る": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Scooter",
      "Mama",
      "Task"
    ],
    "meanings_en": [
      "Pass Through"
    ],
    "mnemonic_en": "You're on the road and you see this huge, rusty old bell, ringing. \"Look — they're ringing the bell because they're closing the gates! Let's go! Quickly! We need to pass through before the bell stops ringing and they shut the gates!\""
  },
  "特別": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Cow",
      "Temple"
    ],
    "meanings_en": [
      "Special"
    ],
    "mnemonic_en": "Only the most special cow is invited to the Buddhist temple."
  },
  "難しい": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Chinese",
      "Turkey"
    ],
    "meanings_en": [
      "Difficult"
    ],
    "mnemonic_en": "A husband with a big mouth is hiding in the grass from an old bird that he pissed off. You never want to piss off an old (hence very experienced) killer bird. It's really difficult to run away from such a killing machine, so the only thing you can do is to hide in the bushes and hope it doesn't find you."
  },
  "熱い": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Womb",
      "Circle",
      "Boil"
    ],
    "meanings_en": [
      "Heat",
      "^Fever"
    ],
    "mnemonic_en": "A circular pot made out of clay (which is why both the top and the bottom is made out of earth) with a pair of yummy chicken legs inside, and the whole thing is heated with fire from the bottom. Because you need a lot of heat to cook a chicken!"
  },
  "病気": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Sick",
      "Dynamite"
    ],
    "meanings_en": [
      "Sick",
      "^Sickness",
      "^Ill",
      "^Illness"
    ],
    "mnemonic_en": ""
  },
  "服": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Moon",
      "Stamp",
      "Stool"
    ],
    "meanings_en": [
      "Clothes",
      "^Clothing"
    ],
    "mnemonic_en": ""
  },
  "物語": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Cow",
      "Wing"
    ],
    "meanings_en": [
      "Thing"
    ],
    "mnemonic_en": "In India you must not harm any cows nor treat them like things."
  },
  "有名": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Narwhal",
      "Moon"
    ],
    "meanings_en": [
      "Have"
    ],
    "mnemonic_en": ""
  },
  "理由": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "King",
      "Village"
    ],
    "meanings_en": [
      "Reason"
    ],
    "mnemonic_en": "A pictograph of a king living in his castle (on the left) which overlooks his home village (on the right).\nEvery day after he wakes up the first thing the king sees through the huge window in his chambers is that damn village. He was born there. He was raised there. He really misses that place and wants to go back. But he can't. The hard logic dictates that doing such a thing would be extremely dangerous. The moment he peeks his nose outside of the castle gates he'll get assasinated. He knows it. So the only thing he can do is to look through the window, and sigh."
  },
  "力": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Power"
    ],
    "meanings_en": [
      "Power",
      "^Strength"
    ],
    "mnemonic_en": "You need a lot of power to be able to slash through a clothes hanger."
  },
  "旅行": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Direction",
      "Gun",
      "Tofu"
    ],
    "meanings_en": [
      "Trip",
      "^Travel"
    ],
    "mnemonic_en": "A decapitated cow head lying on a chair with a splinter sticking out will point you the way you should travel."
  },
  "全部": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Hat",
      "King"
    ],
    "meanings_en": [
      "All",
      "^Whole"
    ],
    "mnemonic_en": "There is no person of a higher status than a king in the whole world."
  },
  "努力": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Woman",
      "Stool",
      "Power"
    ],
    "meanings_en": [
      "Toil"
    ],
    "mnemonic_en": ""
  },
  "親切": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Stand",
      "Tree",
      "See"
    ],
    "meanings_en": [
      "Parent"
    ],
    "mnemonic_en": "A parent is standing on top of a tree to see what their kid is doing.\n(Imagine that their kid is a teenager, and he has his girlfriend over in his room, and the parent promised not to interrupt. So the parent had no other choice than to get on top of the tree outside of his son's bedroom and try to see what's going on in there from the outside.)"
  },
  "安心": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Roof",
      "Woman"
    ],
    "meanings_en": [
      "Relax",
      "^Cheap"
    ],
    "mnemonic_en": "If you have a nice house with a roof with a chimney, and a woman living there who's waiting for you to come home from work, who loves you and keeps you warm at night, well, that brings a certain piece of mind when you think about it, doesn't it?"
  },
  "記念": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Say",
      "Oneself"
    ],
    "meanings_en": [
      "Write Down",
      "^Record"
    ],
    "mnemonic_en": ""
  },
  "合う": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Suit"
    ],
    "meanings_en": [
      "Suit",
      "^Fit",
      "^Join"
    ],
    "mnemonic_en": "Let's come together and open our mouths under a single sloped roof."
  },
  "都合": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Someone",
      "Building"
    ],
    "meanings_en": [
      "Metropolis"
    ],
    "mnemonic_en": "Every metropolis started as a small village to which someone suddenly decided to come and live in. Then another someone did it too. And another, and so on, until it stops being a small village, and becomes a metropolis."
  },
  "足りる": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Foot"
    ],
    "meanings_en": [
      "Foot",
      "^Leg",
      "^Sufficient"
    ],
    "mnemonic_en": "Gross! Do not put your mouth in your running shoes! That's where your foot goes, right?!"
  },
  "消える": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Tsunami",
      "Triceratops",
      "Moon"
    ],
    "meanings_en": [
      "Extinguish"
    ],
    "mnemonic_en": ""
  },
  "経験": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Thread",
      "Tombstone"
    ],
    "meanings_en": [
      "Passage of Time",
      "^Pass Through",
      "^Manage"
    ],
    "mnemonic_en": ""
  },
  "決める": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Tsunami",
      "Person",
      "Hook"
    ],
    "meanings_en": [
      "Decide",
      "^Decision"
    ],
    "mnemonic_en": "Oops, our submarine is taking in water. I know you've almost decided what to do, but it's not the time to be indecisive. You need to actually decide NOW, or we'll go down!"
  },
  "変わる": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Red",
      "Winter"
    ],
    "meanings_en": [
      "Change",
      "^Strange"
    ],
    "mnemonic_en": "\"I can change! Please believe me!\" are the words that every serial killer says at their trial after being caught with a bloody knife on a late winter night."
  },
  "調べる": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Say",
      "Circumference"
    ],
    "meanings_en": [
      "Investigate",
      "^Tone"
    ],
    "mnemonic_en": ""
  },
  "選ぶ": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Scooter",
      "Oneself",
      "Together"
    ],
    "meanings_en": [
      "Choose"
    ],
    "mnemonic_en": "Two poisonous snakes are traveling together on a road. Uh... maybe let's select another way to go; I don't want to get bitten and die..."
  },
  "受ける": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Cleat",
      "Forehead",
      "Stool"
    ],
    "meanings_en": [
      "Accept",
      "^Receive"
    ],
    "mnemonic_en": ""
  },
  "残る": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Yakuza",
      "Bar"
    ],
    "meanings_en": [
      "Remainder"
    ],
    "mnemonic_en": "A pictograph of an ancient three-bladed dagger-axe and a bunch of bone remains which were left behind.\n(Imagine an archeological dig where those two things were found next to each other.)"
  },
  "払う": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Fingers",
      "Private"
    ],
    "meanings_en": [
      "Pay"
    ],
    "mnemonic_en": ""
  },
  "必要": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Heart",
      "Slide"
    ],
    "meanings_en": [
      "Certain"
    ],
    "mnemonic_en": "If your heart gets slashed you will certainly die."
  },
  "深い": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Tsunami",
      "Pi",
      "Tree"
    ],
    "meanings_en": [
      "Deep"
    ],
    "mnemonic_en": ""
  },
  "若い": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Flowers",
      "Right"
    ],
    "meanings_en": [
      "Young"
    ],
    "mnemonic_en": ""
  },
  "危ない": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Prison",
      "Cliff",
      "Snake"
    ],
    "meanings_en": [
      "Dangerous"
    ],
    "mnemonic_en": ""
  },
  "込む": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Scooter",
      "Enter"
    ],
    "meanings_en": [
      "Crowded"
    ],
    "mnemonic_en": "If everyone wants to enter the same road it will surely get crowded."
  },
  "比べる": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Compare"
    ],
    "meanings_en": [
      "Compare"
    ],
    "mnemonic_en": "You look at the two spoons to compare them. The left one is a bit different but they are generally of the same type."
  },
  "続ける": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Thread",
      "Sell"
    ],
    "meanings_en": [
      "Continue"
    ],
    "mnemonic_en": "You must continue to sell lots of thread, as that's the only thing you have; if not you'll run out of money and starve."
  },
  "交通": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Lid",
      "Father"
    ],
    "meanings_en": [
      "Mix",
      "^Mingle"
    ],
    "mnemonic_en": "When my father wants to mingle with his mistress he puts a lidon his head and tries to sneak away from home disguised like a garbage can. Mother never notices."
  },
  "経済": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Thread",
      "Tombstone"
    ],
    "meanings_en": [
      "Passage of Time",
      "^Pass Through",
      "^Manage"
    ],
    "mnemonic_en": ""
  },
  "技術": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Fingers",
      "Branch"
    ],
    "meanings_en": [
      "Skill"
    ],
    "mnemonic_en": ""
  },
  "相談": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Tree",
      "Eye"
    ],
    "meanings_en": [
      "Mutual"
    ],
    "mnemonic_en": "Do you know the famous quote by Nietzsche: \"When you gaze long into an abyss the abyss also gazes into you.\"? Yes? No? Well, it doesn't matter. The same thing applies here. If you (represented be an eye here) and a tree face towards each other then, well, you'll be looking at the tree, and the tree will be looking at you."
  },
  "準備": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Tsunami",
      "Turkey",
      "Cross"
    ],
    "meanings_en": [
      "Standard"
    ],
    "mnemonic_en": ""
  },
  "約束": {
    "parts": [],
    "mnemonic": "",
    "parts_en": [
      "Thread",
      "Pool"
    ],
    "meanings_en": [
      "Promise"
    ],
    "mnemonic_en": "A blood oath made with a spoonful of blood will create an invisible and inseparable thread joining you two forever in a promise you won't be able to break."
  }
};
