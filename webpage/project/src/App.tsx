import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import axios from 'axios';

interface FormData {
  age: number;
  mmse: number;
  cdr: number;
  etiv: number;
  nwbv: number;
  asf: number;
  educ: number;
  ses: number;
  visit: number;
  mrDelay: number;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    age: 0,
    mmse: 0,
    cdr: 0,
    etiv: 0,
    nwbv: 0,
    asf: 0,
    educ: 0,
    ses: 0,
    visit: 1,
    mrDelay: 0
  });



  const [prediction, setPrediction] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        Age: formData.age,
        EDUC: formData.educ,
        SES: formData.ses,
        MMSE: formData.mmse,
        CDR: formData.cdr,
        eTIV: formData.etiv,
        nWBV: formData.nwbv,
        ASF: formData.asf,
        Visit: formData.visit,
        MRDelay: formData.mrDelay
      });
      

      const { prediction, probability } = response.data;
      const readablePrediction = prediction === 0 ? 'Nondemented' : 'Demented';

      setPrediction(`${readablePrediction} (Confidence: ${(probability[`class_${prediction}`] * 100).toFixed(2)}%)`);
    } catch (error: any) {
      console.error('Prediction error:', error);
      setPrediction('Error occurred while predicting.');
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-12 w-12 text-indigo-600" />
            <h2 className="ml-3 text-2xl font-bold text-gray-900">Alzheimer's Disease Prediction</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">MMSE Score</label>
                <input
                  type="number"
                  name="mmse"
                  value={formData.mmse}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">CDR</label>
                <input
                  type="number"
                  name="cdr"
                  value={formData.cdr}
                  onChange={handleChange}
                  step="0.5"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">eTIV</label>
                <input
                  type="number"
                  name="etiv"
                  value={formData.etiv}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">nWBV</label>
                <input
                  type="number"
                  name="nwbv"
                  value={formData.nwbv}
                  onChange={handleChange}
                  step="0.001"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">ASF</label>
                <input
                  type="number"
                  name="asf"
                  value={formData.asf}
                  onChange={handleChange}
                  step="0.001"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">EDUC (Years of Education)</label>
                <input
                  type="number"
                  name="educ"
                  value={formData.educ}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">SES (Socioeconomic Status)</label>
                <input
                  type="number"
                  name="ses"
                  value={formData.ses}
                  onChange={handleChange}
                  step="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Visit</label>
                <input
                  type="number"
                  name="visit"
                  value={formData.visit}
                  onChange={handleChange}
                  step="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">MR Delay</label>
                <input
                  type="number"
                  name="mrDelay"
                  value={formData.mrDelay}
                  onChange={handleChange}
                  step="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>


            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Prediction
              </button>
            </div>
          </form>

          {prediction && (
            <div className="mt-6 p-4 rounded-md bg-gray-50">
              <h3 className="text-lg font-medium text-gray-900">Prediction Result</h3>
              <div className={`mt-2 text-sm ${prediction === 'Nondemented' ? 'text-green-600' : 'text-red-600'}`}>
                {prediction}
              </div>
            </div>
          )}

          <div className="mt-6 text-xs text-gray-500">
            <p>* This is a demonstration model and should not be used for actual medical diagnosis.</p>
            <p>* Please consult with healthcare professionals for proper medical evaluation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;