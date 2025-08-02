import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      author: "Анна К.",
      title: "Опыт клинической смерти",
      content: "Во время операции я испытала необычное состояние...",
      replies: 12,
      timestamp: "2 часа назад"
    },
    {
      id: 2,
      author: "Михаил Р.",
      title: "Медитация и астральные путешествия",
      content: "Практикую медитацию уже 10 лет, хочу поделиться опытом...",
      replies: 8,
      timestamp: "5 часов назад"
    }
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  const handleAddPost = () => {
    if (newPost.title && newPost.content && newPost.author) {
      setDiscussions([
        {
          id: discussions.length + 1,
          author: newPost.author,
          title: newPost.title,
          content: newPost.content,
          replies: 0,
          timestamp: "Только что"
        },
        ...discussions
      ]);
      setNewPost({ title: '', content: '', author: '' });
    }
  };

  const researchArticles = [
    {
      title: "Нейронаука о околосмертном опыте",
      description: "Исследование активности мозга в критических состояниях",
      author: "Д-р Петрова Е.А.",
      year: "2024",
      category: "Нейронаука"
    },
    {
      title: "Квантовая физика сознания",
      description: "Теории о природе сознания с точки зрения квантовой механики",
      author: "Проф. Иванов С.М.",
      year: "2023",
      category: "Физика"
    },
    {
      title: "Психология горя и принятия",
      description: "Изучение процессов переживания утраты и трансформации",
      author: "Д-р Смирнова А.В.",
      year: "2024",
      category: "Психология"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0B2E] via-[#2D1569] to-[#0D1B2A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#C9A96E] rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#C9A96E] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#C9A96E] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#C9A96E] rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <img 
              src="/img/23e710c1-9d32-4f96-9512-ee42f9a60c52.jpg" 
              alt="Мистическая галактика" 
              className="w-full h-64 object-cover rounded-lg opacity-80 animate-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent rounded-lg"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#C9A96E] to-[#D4AF37] bg-clip-text text-transparent animate-fade-in">
            Жизнь После Смерти
          </h1>
          
          <p className="text-xl md:text-2xl text-[#C9A96E] mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Исследования, опыт и загадки вечности
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Badge className="bg-[#2D1569] text-[#C9A96E] border-[#C9A96E] px-4 py-2 text-sm">
              <Icon name="Brain" size={16} className="mr-2" />
              Нейронаука
            </Badge>
            <Badge className="bg-[#2D1569] text-[#C9A96E] border-[#C9A96E] px-4 py-2 text-sm">
              <Icon name="Atom" size={16} className="mr-2" />
              Квантовая физика
            </Badge>
            <Badge className="bg-[#2D1569] text-[#C9A96E] border-[#C9A96E] px-4 py-2 text-sm">
              <Icon name="Heart" size={16} className="mr-2" />
              Духовный опыт
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#2D1569] border-[#C9A96E]">
            <TabsTrigger value="research" className="text-[#C9A96E] data-[state=active]:bg-[#C9A96E] data-[state=active]:text-[#1A0B2E]">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Исследования
            </TabsTrigger>
            <TabsTrigger value="forum" className="text-[#C9A96E] data-[state=active]:bg-[#C9A96E] data-[state=active]:text-[#1A0B2E]">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Форум
            </TabsTrigger>
          </TabsList>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchArticles.map((article, index) => (
                <Card key={index} className="bg-[#2D1569]/80 border-[#C9A96E]/30 hover:border-[#C9A96E] transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A96E]/20 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-[#C9A96E]/20 text-[#C9A96E] border-[#C9A96E]/50">
                        {article.category}
                      </Badge>
                      <span className="text-sm text-[#C9A96E]/70">{article.year}</span>
                    </div>
                    <CardTitle className="text-[#C9A96E] text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-[#C9A96E]/70">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#C9A96E]/60">{article.author}</span>
                      <Button variant="outline" size="sm" className="border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A0B2E]">
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <Card className="bg-[#2D1569]/80 border-[#C9A96E]/30 mt-12">
              <CardHeader>
                <CardTitle className="text-[#C9A96E] text-2xl flex items-center">
                  <Icon name="HelpCircle" size={24} className="mr-3" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-[#C9A96E]/30">
                    <AccordionTrigger className="text-[#C9A96E] hover:text-[#D4AF37]">
                      Что происходит с сознанием после смерти?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#C9A96E]/80">
                      Современная наука предлагает различные теории, от материалистических до квантовых интерпретаций сознания. Исследования околосмертного опыта показывают интересные паттерны активности мозга.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-[#C9A96E]/30">
                    <AccordionTrigger className="text-[#C9A96E] hover:text-[#D4AF37]">
                      Можно ли научно изучать жизнь после смерти?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#C9A96E]/80">
                      Да, существуют научные методы изучения: исследования околосмертного опыта, изучение активности мозга в критических состояниях, квантовая физика сознания и нейробиология.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-[#C9A96E]/30">
                    <AccordionTrigger className="text-[#C9A96E] hover:text-[#D4AF37]">
                      Что говорят разные культуры о загробной жизни?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#C9A96E]/80">
                      Практически все культуры имеют представления о продолжении существования после смерти. От реинкарнации в восточных традициях до концепций рая и ада в авраамических религиях.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forum Tab */}
          <TabsContent value="forum" className="space-y-6">
            {/* Add New Post */}
            <Card className="bg-[#2D1569]/80 border-[#C9A96E]/30">
              <CardHeader>
                <CardTitle className="text-[#C9A96E] flex items-center">
                  <Icon name="PlusCircle" size={20} className="mr-2" />
                  Создать новое обсуждение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={newPost.author}
                  onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                  className="bg-[#1A0B2E] border-[#C9A96E]/50 text-[#C9A96E] placeholder:text-[#C9A96E]/50"
                />
                <Input
                  placeholder="Заголовок обсуждения"
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  className="bg-[#1A0B2E] border-[#C9A96E]/50 text-[#C9A96E] placeholder:text-[#C9A96E]/50"
                />
                <Textarea
                  placeholder="Поделитесь своим опытом или вопросом..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  className="bg-[#1A0B2E] border-[#C9A96E]/50 text-[#C9A96E] placeholder:text-[#C9A96E]/50 min-h-[100px]"
                />
                <Button 
                  onClick={handleAddPost}
                  className="bg-[#C9A96E] text-[#1A0B2E] hover:bg-[#D4AF37]"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  Опубликовать
                </Button>
              </CardContent>
            </Card>

            {/* Discussion List */}
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <Card key={discussion.id} className="bg-[#2D1569]/80 border-[#C9A96E]/30 hover:border-[#C9A96E] transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-[#C9A96E] text-lg mb-2">{discussion.title}</CardTitle>
                        <CardDescription className="text-[#C9A96E]/70 mb-3">
                          {discussion.content}
                        </CardDescription>
                        <div className="flex items-center text-sm text-[#C9A96E]/60">
                          <Icon name="User" size={14} className="mr-1" />
                          <span className="mr-4">{discussion.author}</span>
                          <Icon name="Clock" size={14} className="mr-1" />
                          <span>{discussion.timestamp}</span>
                        </div>
                      </div>
                      <Badge className="bg-[#C9A96E]/20 text-[#C9A96E] border-[#C9A96E]/50">
                        <Icon name="MessageCircle" size={12} className="mr-1" />
                        {discussion.replies}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Separator className="mb-4 bg-[#C9A96E]/20" />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A0B2E]">
                        <Icon name="Heart" size={14} className="mr-1" />
                        Нравится
                      </Button>
                      <Button variant="outline" size="sm" className="border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A0B2E]">
                        <Icon name="MessageCircle" size={14} className="mr-1" />
                        Ответить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-[#C9A96E]/20">
        <p className="text-[#C9A96E]/70">© 2024 Жизнь После Смерти - Исследования и сообщество</p>
      </footer>
    </div>
  );
}