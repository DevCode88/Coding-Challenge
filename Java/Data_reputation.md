{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "name": "Car_Data_Analysis.ipynb",
      "provenance": [],
      "authorship_tag": "ABX9TyMi4aL8oueH4zpvTp0lW3Gg",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/KhushbooGupta2111/Data-Analysis-With-Automotive-Industry-Engage/blob/main/Car_Data_Analysis.ipynb\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "9LRaDGt3ZpY1",
        "outputId": "a43e6e79-7ad6-48c5-d3d7-f944ff1b2355"
      },
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Mounted at /content/gdrive\n",
            "Mounted at /content/gdrive\n"
          ]
        }
      ],
      "source": [
        "from google.colab import drive \n",
        "drive.mount('/content/gdrive')\n",
        "drive.mount('/content/gdrive', force_remount=True)"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "eohBMScyZfM7"
      },
      "outputs": [],
      "source": [
        "import numpy as np\n",
        "import pandas as pd\n",
        "import seaborn as sns\n",
        "import matplotlib.pyplot as plt"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "lDAW6VH6ZqKN",
        "colab": {
          "base_uri": "https://localhost:8080/",
          "height": 311
        },
        "outputId": "44308a21-a560-4523-df6c-4e1586d31c75"
      },
      "outputs": [
        {
          "output_type": "error",
          "ename": "FileNotFoundError",
          "evalue": "ignored",
          "traceback": [
            "\u001b[0;31m---------------------------------------------------------------------------\u001b[0m",
            "\u001b[0;31mFileNotFoundError\u001b[0m                         Traceback (most recent call last)",
            "\u001b[0;32m<ipython-input-3-968c508dc51e>\u001b[0m in \u001b[0;36m<module>\u001b[0;34m()\u001b[0m\n\u001b[0;32m----> 1\u001b[0;31m \u001b[0mauto_data\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mpd\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mread_csv\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m'gdrive/My Drive/Auto_Clean_Final.csv'\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/util/_decorators.py\u001b[0m in \u001b[0;36mwrapper\u001b[0;34m(*args, **kwargs)\u001b[0m\n\u001b[1;32m    309\u001b[0m                     \u001b[0mstacklevel\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mstacklevel\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    310\u001b[0m                 )\n\u001b[0;32m--> 311\u001b[0;31m             \u001b[0;32mreturn\u001b[0m \u001b[0mfunc\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m*\u001b[0m\u001b[0margs\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwargs\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    312\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    313\u001b[0m         \u001b[0;32mreturn\u001b[0m \u001b[0mwrapper\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/readers.py\u001b[0m in \u001b[0;36mread_csv\u001b[0;34m(filepath_or_buffer, sep, delimiter, header, names, index_col, usecols, squeeze, prefix, mangle_dupe_cols, dtype, engine, converters, true_values, false_values, skipinitialspace, skiprows, skipfooter, nrows, na_values, keep_default_na, na_filter, verbose, skip_blank_lines, parse_dates, infer_datetime_format, keep_date_col, date_parser, dayfirst, cache_dates, iterator, chunksize, compression, thousands, decimal, lineterminator, quotechar, quoting, doublequote, escapechar, comment, encoding, encoding_errors, dialect, error_bad_lines, warn_bad_lines, on_bad_lines, delim_whitespace, low_memory, memory_map, float_precision, storage_options)\u001b[0m\n\u001b[1;32m    584\u001b[0m     \u001b[0mkwds\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mupdate\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mkwds_defaults\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    585\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 586\u001b[0;31m     \u001b[0;32mreturn\u001b[0m \u001b[0m_read\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mfilepath_or_buffer\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mkwds\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    587\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    588\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/readers.py\u001b[0m in \u001b[0;36m_read\u001b[0;34m(filepath_or_buffer, kwds)\u001b[0m\n\u001b[1;32m    480\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    481\u001b[0m     \u001b[0;31m# Create the parser.\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 482\u001b[0;31m     \u001b[0mparser\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mTextFileReader\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mfilepath_or_buffer\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mkwds\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    483\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    484\u001b[0m     \u001b[0;32mif\u001b[0m \u001b[0mchunksize\u001b[0m \u001b[0;32mor\u001b[0m \u001b[0miterator\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/readers.py\u001b[0m in \u001b[0;36m__init__\u001b[0;34m(self, f, engine, **kwds)\u001b[0m\n\u001b[1;32m    809\u001b[0m             \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0moptions\u001b[0m\u001b[0;34m[\u001b[0m\u001b[0;34m\"has_index_names\"\u001b[0m\u001b[0;34m]\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mkwds\u001b[0m\u001b[0;34m[\u001b[0m\u001b[0;34m\"has_index_names\"\u001b[0m\u001b[0;34m]\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    810\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 811\u001b[0;31m         \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0m_engine\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0m_make_engine\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mengine\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    812\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    813\u001b[0m     \u001b[0;32mdef\u001b[0m \u001b[0mclose\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/readers.py\u001b[0m in \u001b[0;36m_make_engine\u001b[0;34m(self, engine)\u001b[0m\n\u001b[1;32m   1038\u001b[0m             )\n\u001b[1;32m   1039\u001b[0m         \u001b[0;31m# error: Too many arguments for \"ParserBase\"\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m-> 1040\u001b[0;31m         \u001b[0;32mreturn\u001b[0m \u001b[0mmapping\u001b[0m\u001b[0;34m[\u001b[0m\u001b[0mengine\u001b[0m\u001b[0;34m]\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mf\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m**\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0moptions\u001b[0m\u001b[0;34m)\u001b[0m  \u001b[0;31m# type: ignore[call-arg]\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m   1041\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m   1042\u001b[0m     \u001b[0;32mdef\u001b[0m \u001b[0m_failover_to_python\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mself\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/c_parser_wrapper.py\u001b[0m in \u001b[0;36m__init__\u001b[0;34m(self, src, **kwds)\u001b[0m\n\u001b[1;32m     49\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m     50\u001b[0m         \u001b[0;31m# open handles\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m---> 51\u001b[0;31m         \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0m_open_handles\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0msrc\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mkwds\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m     52\u001b[0m         \u001b[0;32massert\u001b[0m \u001b[0mself\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mhandles\u001b[0m \u001b[0;32mis\u001b[0m \u001b[0;32mnot\u001b[0m \u001b[0;32mNone\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m     53\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/parsers/base_parser.py\u001b[0m in \u001b[0;36m_open_handles\u001b[0;34m(self, src, kwds)\u001b[0m\n\u001b[1;32m    227\u001b[0m             \u001b[0mmemory_map\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mkwds\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mget\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m\"memory_map\"\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;32mFalse\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    228\u001b[0m             \u001b[0mstorage_options\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mkwds\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mget\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m\"storage_options\"\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;32mNone\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 229\u001b[0;31m             \u001b[0merrors\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mkwds\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mget\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m\"encoding_errors\"\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;34m\"strict\"\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    230\u001b[0m         )\n\u001b[1;32m    231\u001b[0m \u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;32m/usr/local/lib/python3.7/dist-packages/pandas/io/common.py\u001b[0m in \u001b[0;36mget_handle\u001b[0;34m(path_or_buf, mode, encoding, compression, memory_map, is_text, errors, storage_options)\u001b[0m\n\u001b[1;32m    705\u001b[0m                 \u001b[0mencoding\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mioargs\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mencoding\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m    706\u001b[0m                 \u001b[0merrors\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0merrors\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m--> 707\u001b[0;31m                 \u001b[0mnewline\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0;34m\"\"\u001b[0m\u001b[0;34m,\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m    708\u001b[0m             )\n\u001b[1;32m    709\u001b[0m         \u001b[0;32melse\u001b[0m\u001b[0;34m:\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
            "\u001b[0;31mFileNotFoundError\u001b[0m: [Errno 2] No such file or directory: 'gdrive/My Drive/Auto_Clean_Final.csv'"
          ]
        }
      ],
      "source": [
        "auto_data = pd.read_csv('gdrive/My Drive/.csv')"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "LEyqKKwwzFwn"
      },
      "outputs": [],
      "source": [
        "auto_data = auto_data.iloc[: , 1:]"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "GZaG7F0ZuGYn"
      },
      "outputs": [],
      "source": [
        "auto_data.columns.tolist()"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "ok-mXeUDzVde"
      },
      "outputs": [],
      "source": [
        "company_dictionary = auto_data[\"Make\"].value_counts().to_dict()\n",
        "print(company_dictionary)"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "eONOh7ye2FaP"
      },
      "outputs": [],
      "source": [
        "# auto_data.groupby(['Make']).sum().plot(kind='pie', y='Make')\n",
        "company_dataframe = pd.DataFrame(company_dictionary.items(), columns=['Company', 'Amount'])\n",
        "company_dataframe.groupby(['Company']).sum().plot(kind='pie', y='Amount' , legend=None)"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "ob_goEn7uIic"
      },
      "outputs": [],
      "source": [
        "auto_data.describe()"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "PDf5nqm1uMDD"
      },
      "outputs": [],
      "source": [
        "auto_data_correlation = auto_data.corr()"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "rlG4cYVlzBsU"
      },
      "outputs": [],
      "source": [
        "# plt.figure(figsize=(10,10))\n",
        "# sns.heatmap(auto_data_correlation[[\"Ex-Showroom_Price\" , \"Displacement\" , \"Basic_Warranty_Years\" , \"Number_of_Airbags\" , \"Emission_Norm\"]] , cmap=\"Greens\" , annot=True , fmt = '.2f')"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "RmChwIRRzm1a"
      },
      "outputs": [],
      "source": [
        "numeric_data_list = auto_data._get_numeric_data().columns.tolist()"
      ]
    },
    {
      "cell_type": "code",
      "source": [
        "categoric_data_list = [col for col in auto_data.columns if col not in numeric_data_list]"
      ],
      "metadata": {
        "id": "2mOM__jwAZi8"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "print(numeric_data_list)"
      ],
      "metadata": {
        "id": "v39NjAu-BkqD"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "print(categoric_data_list)"
      ],
      "metadata": {
        "id": "JEYNSZ3iCEYQ"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "# from sklearn.preprocessing import LabelEncoder\n",
        "# label_encoder = LabelEncoder()"
      ],
      "metadata": {
        "id": "oBecwNofCTlL"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "# for column_name in categoric_data_list:\n",
        "#   auto_data[column_name] = label_encoder.fit_transform(auto_data[column_name])"
      ],
      "metadata": {
        "id": "GUvC8P-8EUpI"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "auto_data_correlations = auto_data.corr()\n",
        "plt.figure(figsize=(5,120))\n",
        "sns.heatmap(auto_data_correlations[[\"Ex-Showroom_Price\"]].sort_values(by=['Ex-Showroom_Price'],ascending=False) , cmap=\"Greens\" , annot=True , fmt = '.2f')"
      ],
      "metadata": {
        "id": "l2fjdVGpFLCR"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "# from sklearn.feature_selection import VarianceThreshold\n",
        "# variance_threshold = VarianceThreshold(threshold=100)\n",
        "# variance_threshold.fit(auto_data.drop(labels = ['Ex-Showroom_Price'] , axis = 1))"
      ],
      "metadata": {
        "id": "dxMebD_jFtZj"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "markdown",
      "source": [
        "Graphs and Analysis"
      ],
      "metadata": {
        "id": "KfRURt-d9ZKU"
      }
    },
    {
      "cell_type": "code",
      "source": [
        "# auto_data.hist(figsize=(50,50) , align = 'mid')"
      ],
      "metadata": {
        "id": "Fub-kQfG6J_n"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "car = auto_data[\"Body_Type\"].value_counts().to_dict()\n",
        "car_dataframe = pd.DataFrame(car.items(), columns=['Body Type', 'Types'])\n",
        "car_dataframe.groupby(['Body Type']).sum().plot(kind='pie', y='Types' , legend=True , labels = None, autopct='%1.1f%%', figsize=(10, 20))\n",
        "plt.title(\"Different Car Body Types\", fontsize=14);"
      ],
      "metadata": {
        "id": "HcU4hYwq_Xn8"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "car = auto_data[\"Fuel_Type\"].value_counts().to_dict()\n",
        "car_dataframe = pd.DataFrame(car.items(), columns=['Fuel_Categories', 'Types'])\n",
        "car_dataframe.groupby(['Fuel_Categories']).sum().plot(kind='pie', y='Types' , legend=True , labels = None, autopct='%1.1f%%', figsize=(10, 20))\n",
        "plt.title(\"Different Car Fuel_Categoriess\", fontsize=14);"
      ],
      "metadata": {
        "id": "b7D0agleAjW1"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "car = auto_data[\"Drivetrain\"].value_counts().to_dict()\n",
        "car_dataframe = pd.DataFrame(car.items(), columns=['Fuel_Categories', 'Types'])\n",
        "car_dataframe.groupby(['Fuel_Categories']).sum().plot(kind='pie', y='Types' , legend=True , labels = None, autopct='%1.1f%%', figsize=(10, 20))\n",
        "plt.title(\"Different Car Fuel_Categoriess\", fontsize=14);"
      ],
      "metadata": {
        "id": "wTX_u-BXEKzM"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "auto_data[\"Body_Type\"].value_counts()"
      ],
      "metadata": {
        "id": "YSLRbqf83kP4"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "auto_data['Model'].where(auto_data['Body_Type'] == \"Hatchback\").dropna().unique()"
      ],
      "metadata": {
        "id": "WFoHAyJ03Vc9"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "\n",
        "max_price = auto_data['Ex-Showroom_Price'].max();\n",
        "min_price = auto_data['Ex-Showroom_Price'].min();"
      ],
      "metadata": {
        "id": "khfoLm2A3h_x"
      },
      "execution_count": null,
      "outputs": []
    },
    {
      "cell_type": "code",
      "source": [
        "print((min_price))\n",
        "print(type(min_price))\n",
        "\n",
        "print((max_price))\n",
        "print(type(max_price))"
      ],
      "metadata": {
