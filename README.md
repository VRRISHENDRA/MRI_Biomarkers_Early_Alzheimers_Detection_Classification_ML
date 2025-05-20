# MRI-Based Biomarkers for Early Detection and Classification of Alzheimer Disease Using Machine Learning 
## Abstract 
<p align="justify">

Older adults suffer from Alzheimer's Disease (AD), a progressive neurodegenerative condition that leads to worsening dementia and fatal outcomes. Accurate and early identification of AD is critical, as current diagnostic methods often lack sufficient validity. 

Magnetic Resonance Imaging (MRI) proves effective in assessing both localized and overall brain tissue atrophy in AD patients. By leveraging biomarkers extracted from MRI data, machine learning (ML)-based binary classifiers enhance diagnostic accuracy, supporting more informed clinical decision-making.

This research introduces an AI-based diagnostic framework utilizing the **OASIS MRI dataset**, classifying subjects into three cognitive states:
- **Nondemented**
- **Demented**
- **Converted** (individuals who progressed from nondemented to demented)

The system applies multiple ML algorithms including **Random Forest**, **AdaBoost**, **Support Vector Machine (SVM)**, **K-Nearest Neighbors (KNN)**, and **Logistic Regression (LR)** for classification tasks.

</p>

---

### 🎯 Model Performance Summary

| Model             | Accuracy (%) | AUC Score |
|------------------|--------------|-----------|
| Random Forest     | 96.00        | 0.9906    |
| SVM               | 96.00        | 0.9898    |
| Logistic Regression | 96.00     | 0.9935    |
| AdaBoost          | 94.67        | 0.9767    |
| KNN               | 94.67        | 0.9938    |

---

<p align="justify">

The results indicate that AI-driven MRI analysis is a promising solution for early AD detection. By classifying patients at an earlier stage, the system can support interventions that may delay or reduce disease progression.

</p>

## 🧠 Introduction

<p align="justify">

**Alzheimer’s Disease (AD)** represents a slow brain-wasting condition and is one of the leading causes of dementia, primarily affecting older adults. The initial symptoms, such as memory loss, often go unnoticed, leading to delays in diagnosis and timely medical intervention. While the medical community has made progress in treatment strategies, a complete cure remains elusive.

Early diagnosis of AD is critical, as timely treatment initiation can help slow progression, improve quality of life, and provide patients with optimal care outcomes. Sole reliance on medication is not sufficient to manage AD effectively. In this regard, **Magnetic Resonance Imaging (MRI)** serves as a powerful diagnostic tool, allowing clinicians to observe both localized and overall brain tissue atrophy patterns associated with the disease.

</p>

<p align="justify">

Numerous current research studies demonstrate that **Machine Learning (ML)** models are capable of effectively analyzing MRI data to detect and classify Alzheimer’s Disease. Diagnostic accuracy improves significantly when MRI-based **biomarkers** are used, particularly in predicting which patients with **Mild Cognitive Impairment (MCI)** are likely to develop dementia.

The objective of this project is to develop a robust ML-based diagnostic system using MRI scan datasets to:
- Detect individuals at risk of developing AD,
- Support individualized treatment planning,
- Enhance patient care and prognosis.

</p>

<p align="justify">

MRI provides rich structural and functional data about the brain, enabling the discovery of critical **biomarkers** that reflect the progression of AD. Techniques such as **region segmentation** in MRI images allow for monitoring key indicators of neurodegeneration, including:
- **Hippocampal atrophy**
- **Ventricular enlargement**
- **Cortical thinning**
- **Reduction in brain volume**

By extracting these biomarkers from MRI data and applying Machine Learning and Computer Vision methods, we can uncover meaningful patterns and correlations that support early diagnosis, classification, and disease progression tracking. The integration of MRI data with ML-based models paves the way for significant advancements in AD detection and management, ultimately contributing to more timely and effective interventions.

</p>

## 📊 Dataset

<p align="justify">

This project utilizes brain MRI data from the **Open Access Series of Imaging Studies (OASIS)**, a public initiative that provides free access to neuroimaging datasets for the scientific research community. OASIS aims to advance both basic and clinical neuroscience by compiling and openly distributing high-quality MRI data.

The dataset is a collaborative contribution from:
- **Washington University Alzheimer’s Disease Research Center**
- **Dr. Randy Buckner** of the Howard Hughes Medical Institute (HHMI) at Harvard University
- **Neuroinformatics Research Group**, Washington University School of Medicine
- **Biomedical Informatics Research Network**

</p>

---

### 🧪 OASIS Cross-Sectional MRI Dataset

<p align="justify">

This dataset contains MRI scans from **416 subjects**, aged **18 to 96**, grouped into:
- **Young**
- **Middle-aged**
- **Nondemented Older Adults**
- **Demented Older Adults**

Each subject contributed **3 to 4 T1-weighted MRI scans** collected during a single session. All subjects were **right-handed** and included both male and female participants. Among the 416 subjects:
- **100 subjects** were diagnosed with **very mild to moderate Alzheimer’s Disease (AD)** after age 60.
- **20 nondemented subjects** underwent follow-up scans shortly after their initial visit, providing **reliability data**.

</p>

---

### 📈 OASIS Longitudinal MRI Dataset

<p align="justify">

This dataset contains longitudinal MRI data from **150 older adult subjects**, aged **60 to 96**, over **multiple visits** spaced at least **one year apart**, totaling **373 imaging sessions**. Each session provided **3 or 4 T1-weighted scans** collected in a single scan session. Like the cross-sectional dataset, all subjects were **right-handed** and included both genders.

Participant classification:
- **72 subjects** remained nondemented throughout.
- **64 subjects** were diagnosed with dementia during their initial visit and retained this diagnosis.
- **51 of those 64** were categorized as **mild to moderate Alzheimer’s Disease**.
- **14 subjects** initially nondemented later developed dementia during the study (i.e., **"Converted" group**).

</p>

## 🔍 Key Insights

<p align="justify">

- **MRI-based machine learning models** demonstrated performance metrics comparable to **EEG-LSTM** models, with classification accuracies of **96%** and **97%** respectively. However, MRI approaches show **stronger clinical reliability** and interpretability.

- MRI-based classification consistently delivered **superior decision boundaries**, as reflected by **AUC scores exceeding 0.99**, outperforming EEG-based methods.

- The top-performing predictive algorithms included:
  - **Random Forest**
  - **Support Vector Machine (SVM)**
  - **Logistic Regression**

  These models achieved optimal performance through a **balanced combination of precision and recall**, making them suitable for robust diagnostic applications.

- **K-Nearest Neighbors (KNN)** achieved **perfect precision** (i.e., no false positives), but only reached a **recall score of 0.78**, indicating it missed some positive cases and may require **further tuning** or feature refinement for improvement.

</p>
