const fs = require('fs');
let data = fs.readFileSync('src/pages/ArmarEfetuarTaskRunner.tsx', 'utf8');

const nonTestDayBlock = `<div className="bg-[#FFEAA7] p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] mb-8 text-center">
          <h3 className="text-2xl font-black text-[#2D3436] uppercase mb-4">Como treinar:</h3>
          <p className="text-lg font-bold text-[#636E72]">
            Pegue um caderno e um lápis. Arme e resolva as continhas no papel para treinar.
          </p>
        </div>

        <div className="mb-8">
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <Card key={q.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#B2BEC3] font-black text-xl">{idx + 1}.</span>
                  <span className="text-3xl font-black tracking-wider">{q.text}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>`;

const replaceWith = `<div className="bg-[#FFEAA7] p-6 rounded-[32px] border-4 border-[#2D3436] shadow-[8px_8px_0px_0px_#2D3436] mb-8 text-center">
          <h3 className="text-2xl font-black text-[#2D3436] uppercase mb-4">Como treinar:</h3>
          <p className="text-lg font-bold text-[#636E72]">
            Pegue um caderno e um lápis. Arme as continhas no papel e coloque o resultado no aplicativo.
          </p>
        </div>

        <div className="mb-8">
          <div className="space-y-4">
            {questions.map((q, idx) => (
              <Card key={q.id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-[#B2BEC3] font-black text-xl">{idx + 1}.</span>
                  <span className="text-3xl font-black tracking-wider">{q.text}</span>
                </div>
                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-[#636E72] font-black uppercase text-sm">Resposta:</span>
                  <input
                    type="tel"
                    value={answers[q.id] || ''}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    className="w-32 px-4 py-3 text-3xl font-black text-center bg-white border-4 border-[#2D3436] rounded-xl shadow-[4px_4px_0px_0px_#2D3436] focus:outline-none focus:translate-y-1 focus:shadow-[2px_2px_0px_0px_#2D3436] transition-all"
                    placeholder="?"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>`;

data = data.replace(nonTestDayBlock, replaceWith);

fs.writeFileSync('src/pages/ArmarEfetuarTaskRunner.tsx', data, 'utf8');
console.log('Patched ArmarEfetuarTaskRunner.tsx with inputs');
